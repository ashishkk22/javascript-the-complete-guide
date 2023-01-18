const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array("Hii", "Welcome");
const moreNumbers22 = Array("Hii", "Welcome"); //also valid
const moreNumber5 = Array.of(1, 2); //valid syntax.
const moreNumbers2 = new Array(1, 2); // here length is 2 and element are 1 and 2.
const moreNumbers3 = new Array(5); //so here it is going to give the 5 length of array.
console.log(moreNumbers);

//array like object or iterable
const moreN = Array.from("Hi!");
console.log(moreN);

const litsItems = document.querySelectorAll("li");
// const listItemArray = Array.from(listItems);

console.log(litsItems);
// console.log(listItemArray);

//which data you can store in the array ?
const personData = [30, "Max", { moreDetail: [] }];
const analyticsData = [
  [1, 2, 3],
  [2, 3, 4, 5],
];

const hobbies = ["sports", "Cooking"];
hobbies.push("reading"); //this add the data at last
hobbies.unshift("Coding"); //adds the element at the staring of the array
hobbies.pop(); //to remove the last element of the array
console.log(hobbies);
hobbies.shift(); //it shift the first element to the left so it deletes the element from it.

//posh and pop are faster
//shift and unshift are  slower

hobbies[1] = "coding";
hobbies[10] = "ak"; //so here it is going to add the ak at the 10th position and between all the element it is going to be empty space.
console.log(hobbies);

hobbies.splice(1, 0, "Good Food");
//three parameter  1. start looking from here 2. delete this many elements 3.add this element

hobbies.splice(0, 1); // so this removes the first element of the arrays
hobbies.splice(1); //it is going to delete all the items except first.

//even spice is going to give the removed items also
const removedElements = hobbies.splice(-1, 1); //so here it is going to start from the last and delete the last element
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 120];
const storedResults = testResults.slice(); //slice method is going to give the new array
// so if i don't add the slice method above then it is going to get the reference of the testResult string

const partOfTheArray = testResults.slice(0, 2); // so here it is going to give the index element 0 and 1.
const partOfArray = testResults.slice(2); // it is going to return the array with second element to the last.
testResults.push(2);

const newArrayAfterConcat = testResults.concat([1, 2, 3]); // so here it is going to return new array (new address) with the concat of the two array.

//at which index this item is present
console.log(testResults.indexOf(1.5)); //it is going to find the first index of the array for the element
console.log(testResults.lastIndexOf(1.5)); //from the last
// it is not going to work for the reference value just like objects

const personData2 = [{ name: "ashish" }, { name: "mayank" }];
const manuel = personData2.find((person, idx, persons) => {
  return person.name === "mayank";
});
console.log(manuel, "manuel");
