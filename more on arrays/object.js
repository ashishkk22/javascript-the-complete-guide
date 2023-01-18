const person = {
  name: "ashish",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    // alert("Hi there!");
  },
};

person.isAdmin = true;
console.log(person); //so here we have admin property in the person

// delete person.age; //age is going to deleted
const age = "age";
// person.greet();
console.log(person[age]); //will get the 22
console.log(person);

//if we do like this
const obj = {
  22: "ashish",
  2022: "kachhadiya",
  1: "month",
};
//so the output is going to be in the order
//think about arrays. arrays are objects with number keys where the order should be guaranteed(ascending).

const place = "city";
const user = {
  name: "ashish",
  state: "Gujarat",
  [place]: "ahmedabad",
}; //city as ahmedabad

const title = "HIII";
const extraName = "Huii";

const newObj = {
  title,
  extraName,
  //output --> { title: 'HIII', extraName: 'Huii' }
};

console.log(newObj);
