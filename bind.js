let fullName = {
  firstName: "ashish",
  lastName: "Kachhadiya",
};

let printFullName = function (homeTown, State) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + State
  );
};

const bindFunction = printFullName.bind(fullName, "ahmedabad", "gujarat");
bindFunction();
//so here main difference is that we will get the function and after that we are going to execute it .
