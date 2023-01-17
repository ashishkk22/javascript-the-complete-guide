let fullName = {
  firstName: "ashish",
  lastName: "Kachhadiya",
};

let printFullName = function (homeTown, State) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + State
  );
};

printFullName.apply(fullName, ["ahmedabad", "gujarat"]);
//so here we have to send the argument
