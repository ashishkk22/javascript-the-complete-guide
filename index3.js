const cart = ["watch", "shirt", "jeans"];

const promise = createOrder(cart); //orderID

promise
  .then(function (orderId) {
    //   proceedToPayment(orderId);
    console.log("in the then after promise", orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

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
function validateCart(cart) {
  return false;
}
