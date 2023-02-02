function Product(n, p, c) {
  this.name = n;
  this.price = p;
  Category.call(this, c); //if we dont call this then we will get error
}

function Category(c) {
  this.categoryName = c;
}

Category.prototype.getCategoriesName = function () {
  console.log(this.categoryName);
};

Product.prototype = Object.create(Category.prototype); //what went wrong here
//now this is right if we attach getCategoriesName to category prototype
let p = new Product("Iphone", 200000, "Electronics");
p.getCategoriesName();
