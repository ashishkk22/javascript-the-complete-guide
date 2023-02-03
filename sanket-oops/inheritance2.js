class Category {
  constructor(c) {
    this.categoryName = c;
  }
  getCategoryName() {
    console.log("category is ", this.categoryName);
  }
}

class Product extends Category {
  constructor(n, p, c) {
    super(c);
    this.name = n;
    this.price = p;
  }
  display() {
    console.log("details of product are");
    console.log("Name", this.name);
    console.log("Price", this.price);
    this.getCategoryName();
  }
}

let newProduct = new Product("iphone", 100000, "mobiles");
console.log(newProduct);
