class Product {
  constructor(n, p) {
    //constructor function to create a real life instances called as object
    //when we create an object this is the first function that gets call
    this.name = n;
    this.price = p;
  }
  displayProduct() {}
  buyProducts() {}
}

let iphone = new Product("iphone", 100000);
let macBook = new Product("macBook air", 100000);
console.log(iphone, macBook, "..");

//with the functions

function Products(n, p) {
  this.name = n;
  this.price = p;
  this.display = function () {
    console.log(this.name, this.price);
  };
  return this;
}
let p1 = new Products("name", 10000);
console.log(p1);
p1.display();

//22222 => 10 ==> 1

var obj = {
  name: "ashish",
  place: "ahmedabad",
  display: function () {
    console.log(this.name, " ---- ", this.place);
  },
};
var name = "vipul";
var obj2 = {
  name: "ashish",
  place: "ahmedabad",
  display: () => {
    console.log(this.name, "-----", this.place);
  },
};
obj.display();
obj2.display();

var obj3 = {
  name: "ashish",
  place: "ahmedabad",
  display: function () {
    setTimeout(() => {
      console.log(this.name, " lives in ", this.place);
    });
  },
};
obj3.display();
//can we add method in the function like we do in object without prototype
//function as argument pass receive return
function Ak(n, p) {
  this.n = n;
  this.p = p;
}
let object = new Ak(2, 2);
Ak.myMethod = function () {
  console.log(this.n, this.p);
};
console.log(object.myMethod); //
console.log(Ak); //
console.log(Ak); //

let Ak2 = {
  n: "p",
};
Ak2.myMethod = function () {
  console.log(this.n);
};
console.log(Ak2.myMethod());
function fn() {
  function fn2() {
    console.log("hi ggggg");
  }
  return fn2;
}
fn()();
//
const player1 = {
  firstName: "virat",
  lastName: "kohli",
  numberToBat: 3,
  getDetails: function () {
    console.log(this.firstName + this.lastName, "" + "---------");
  },
};
const obj22 = function () {
  console.log(this.getDetails());
};
let fnWithDiffThis = obj22.bind(player1); // it is going to give the new fn with the diff this
fnWithDiffThis();

let obj = {
  x: 20,
  y: 22,
};
obj.x = 22; //we can update the value but if we have to freeze it
Object.freeze(obj);

let keys = Object.keys(obj); //gives the array of keys
let values = Object.values(obj); //gives the array of value
let entries = Object.entries(obj); //gives the array of key:value 2d array

//if you have to create the new obj copy the
let obj = { ak: "ashish" };
let newObj = obj; //wrong because of same memory
const objNew = Object.create(obj);
