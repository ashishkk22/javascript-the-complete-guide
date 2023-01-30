//custom map
function customMap(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}
function square(x) {
  return x * x;
}
// console.log(customMap([1, 2, 3, 4, 5], square));

//filter
let fArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filter(fArr, cb) {
  let newArr = [];
  for (let i = 0; i < fArr.length; i++) {
    if (cb(fArr[i])) {
      newArr.push(fArr[i]);
    }
  }
  return newArr;
}
function EvenOrNot(x) {
  if (x % 2 === 0) {
    return x;
  }
}
// console.log(filter(fArr, EvenOrNot));

//reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reduce(arr, acc, cb) {
  let answer = acc;
  for (let i = 0; i < arr.length; i++) {
    answer = cb(arr[i], answer);
  }
  return answer;
}
function sumOfArr(x, sum) {
  return (sum += x);
}
// console.log(reduce(arr, 0, sumOfArr));

//============polyfill for bind===============//
let name = {
  firstName: "ashish",
  lastName: "kachhadiya",
};

let printName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
};

let printMyName = printName.bind(name, "ahmedabad");
// printMyName("gujarat");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...arg) {
    obj.apply(args[0], [...params, ...arg]);
  };
};
let printMyName1 = printName.myBind(name, "ahmedabad");
// printMyName1("gujarat");

//===============PolyFill of Map==================//

let arrForMap = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.myPolyfillMap = function (callback) {
  const newArr = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};

let newArrWithMap = arrForMap.map(value => value * 2);
// console.log(newArrWithMap);
let newArr = arrForMap.myPolyfillMap((value, index, arr) => {
  return value * 2;
});
// console.log(newArr);

//=============PolyFill of Map==================//

let arrForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArrWithFilter = arrForFilter.filter(
  (value, index, arr) => value % 2 === 0
);
console.log(newArrWithFilter);
Array.prototype.myPolyFillFilter = function (callback) {
  let arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
let newArrWithCustomFilter = arrForFilter.myPolyFillFilter(
  (value, index, arr) => value % 2 === 0
);
console.log(newArrWithCustomFilter);

//=============Polyfill of reduce=================
let initialValue = 0;
let arrForReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arrForReduce.reduce((prev, curr, idx, arr) => {
  return prev + curr;
}, initialValue);
console.log(sum);

Array.prototype.myPolyFillReduce = function (callback, initialValue) {
  let arr = this;
  let newValue;
  if (initialValue !== undefined) {
    newValue = initialValue;
  } else {
    newValue = arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    newValue = callback(newValue, arr[i], i, arr);
  }
  return newValue;
};
let sum2 = arrForReduce.myPolyFillReduce((prev, curr, idx, arr) => {
  return prev + curr;
}, initialValue);
console.log(sum2);
