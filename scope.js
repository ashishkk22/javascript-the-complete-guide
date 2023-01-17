//shadowing
var a = 100;
let b = 20;
{
  var a = 200;
  let b = 22;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);

//closure

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z);
z();

//setTimeout with different interval

function x1() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i, "time ");
    }, i * 1000);
  }
  console.log("javascript");
}
x1();
