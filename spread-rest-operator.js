function sum(a, b) {
  return a + b;
}

var myArr = [5, 4];

console.log(sum(...myArr)); //spread operator --> so what it does it takes a group and make the multiple values from that.

function sumOfNum(a, b, ...args) {
  //this is the rest operator
  console.log(args); // -> so here args is going to convert individual value to array
  let multi = a * b;
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return [sum, multi];
}

console.log(sumOfNum(2, 3, 1, 1, 1));
