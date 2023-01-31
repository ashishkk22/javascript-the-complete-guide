//currying with bind

function myMethod(x, y) {
  console.log(x + " " + y);
}

function mySecondMethod(y) {
  let x = 2;
  console.log(x + " " + y);
}

let newFnFromBind = myMethod.bind(this, 2); // so here we will get the above mySecondMethod copy of myMethod in newFnFromBind
newFnFromBind(5);

let multiplyByThree = myMethod.bind(this, 3);
multiplyByThree(6);

//second method with function closure

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multiplyByTwo = multiply(2);
multiplyByTwo(3);
