//types of loops
// for loop        for of loop         for in loop         while loop

console.log("namaste");

setTimeout(() => {
  console.log("js");
}, 5000);

console.log("season 2");

const cart = ["shoes", "pants", "kurta"];

///callback is the super powerful way of managing the async operation

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWaller();
    });
  }); //so here this is the callback function
});

//so the above code is the callback hell --> this code is unmaintainable & unreadable
//so here we are giving the whole control to the createOrder function if this function executed twice or something error occurs
//so we can't give the whole control to the createOrder function

// so here the main issues with callbacks are
// 1. callback hell
// 2. inversion of control.
