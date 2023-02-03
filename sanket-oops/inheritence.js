function Product(n, p, c) {
  this.name = n;
  this.price = p;
  Category.call(this, c);
}

function Category(c) {
  this.categoryName = x;
  this.getCategoriesName = function () {
    console.log(this.categoryName);
  };
}

let p = new Product("Iphone", 200000, "Electronics");
p.getCategoriesName();
