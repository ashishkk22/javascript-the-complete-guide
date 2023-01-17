const h1 = document.getElementById("main-title");

h1.textContent = "some new title";
h1.style.color = "white";
h1.style.backgroundColor = "blue";
h1.innerHTML = "<h2>Hiii </h2>";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " dummy text";

const body = document.body;

const section = document.querySelector("section");
const button = document.querySelector("button");
section.className = "";

button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.className = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }

  section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

const newLI = document.createElement("li");
newLI.innerHTML = "hii new li 4";
const ul = document.querySelector("ul");

ul.appendChild(newLI);
