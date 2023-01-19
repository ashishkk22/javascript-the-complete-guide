const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("error it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hii");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Huii");
});

Promise.all([promise2, promise3, promise4]).then(values => console.log(values));

promise
  .then(result => result + "!")
  .then(result => console.log(result))
  .catch(console.log(err));
