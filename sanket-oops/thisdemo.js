const obj = {
  name: "ashish",
  fn: function () {
    console.log(this, "this is this");
  },
};
obj.fn();

function product() {
  this.name = n;
}
let d = new product("iphone");

product.prototype.display = function () {
  console.log("this is the display fn", this.name);
};
