//
let counter = 0;
const getData = () => {
  console.log(counter);
  counter++;
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData(context, arg);
    }, d);
  };
};

const betterFn = debounce(getData, 300);
