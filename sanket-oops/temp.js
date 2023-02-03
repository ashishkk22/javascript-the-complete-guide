// function Ak(n, p) {
//   this.n = n;
//   this.p = p;
// }
// let object = new Ak(2, 2);
// Ak.prototype.myMethod = function () {
//   console.log(this.n, this.p);
// };
// console.log(object.myMethod()); //
// console.log(Ak); //
// console.log(Ak); //

let obj = {
  one: "22",
  two: "23",
};
Object.seal(obj);
obj.one = "222";
console.log(obj);
