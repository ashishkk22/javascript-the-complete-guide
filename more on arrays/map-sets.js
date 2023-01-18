//set --> duplicate is not allowed

const ids = new Set([1, 3, 4]);

if (ids.has("hi")) {
  ids.delete("hi");
}

console.log(ids.has(1)); //if present it returns true.

const personData = new Map([
  ["name", "ashish"],
  ["lname", "kachhadiya"],
]);
console.log(personData);
console.log(personData.get(person)); //get data from the map
personData.set("ak", "sda");

for (const entry of personData.entries()) {
  console.log(entry);
}
