function* simpleGenerator() {
  let i = 100;
  while (true) {
    i++;
    yield i;
  }
}

let simpleGen = simpleGenerator(); //we can't call directly we have to make the instance
function callTheGenerator() {
  //   console.log(simpleGen.next());
  document.getElementById("span-ele").innerHTML = simpleGen.next().value;
}
