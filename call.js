// let fullName = {
//   firstName: "Ashish",
//   lastName: "Kachhadiya",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// fullName.printFullName();

// let fullName2 = {
//   firstName: "sachin",
//   lastName: "tendulakar",
// };

// fullName.printFullName.call(fullName2);

let fullName = {
  firstName: "ashish",
  lastName: "Kachhadiya",
};

let printFullName = function (homeTown, State) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + State
  );
};

printFullName.call(fullName, "ahmedabad", "gujarat");
//so here in the call method we have to send the argument different
