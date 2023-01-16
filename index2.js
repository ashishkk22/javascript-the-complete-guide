const cart = ["tshirt", "shoes", "jeans"];

// createOrder(cart, function () {
//   proceedTOPayment(orderId);
// }); //orderId;

// const promise = createOrder(cart);

// so whenever javascript calls a api it return a empty object like data:{undefined } after 5-6 seconds of the execution it is going to give the real data
// so the promise object is going to filled with data automatically after some time { data : orderDetails };

// promise.then(function () {
//   proceedTOPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/ashishkk22";

//fetch function returns a promise

const user = fetch(GITHUB_API);

//
console.log(user);

user.then(data => {
  console.log(data);
});

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWaller();
    });
  }); //so here this is the callback function
});

//above code can be handled using promise chaining
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function showOrderSummary(transactionId) {
    return updateWallet(transactionId);
  });
