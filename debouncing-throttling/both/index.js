//Debouncing  and throttling in js
//qs 1 create a button ui and add debounce as follows ==>
// show the button pressed
// increase the triggered times count after the 800 ms
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const dCount = document.querySelector(".increment_debounce");
const tCount = document.querySelector(".increment_throttle");

let pressedCount = 0;
let triggerCountD = 0;
let triggerCountT = 0;

//debounce polyfill implementation
const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

//throttle polyfill implementation
const myThrottle = (cb, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const debouncedCount = myDebounce(() => {
  //lodash cdn
  dCount.innerHTML = ++triggerCountD;
}, 1000);

const throttledCount = myThrottle(() => {
  tCount.innerHTML = ++triggerCountT;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
  throttledCount();
});
