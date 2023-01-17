let fullName = {
  firstName: "Ashish",
  lastName: "Kachhadiya",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
fullName.printFullName();

let fullName2 = {
  firstName: "sachin",
  lastName: "tendulakar",
};

fullName.printFullName.call(fullName2);
