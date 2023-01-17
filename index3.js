const cart = ["watch", "shirt", "jeans"];

createOrder(cart)
  .then(function (orderId) {
    //   proceedToPayment(orderId);
    console.log("in the then after promise", orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  }) //so here catch is going to check for the above then and if it is even not resolved then also it is going to in the run
  .then(function () {
    return proceedToPayment(orderId);
  })
  .then(() => {
    console.log("no matter what happens i will definitely be called");
  });

//here we have to return to escape the errors
//
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("cart is not valid");
      reject(error);
    }
    //logic for creating order
    const orderId = "2344#$%%!@534435!@#%";
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
