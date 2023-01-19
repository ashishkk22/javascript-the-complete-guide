movePlayer(100, "left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

//async await is the syntax sugar
//to make the promise prettier or look like synchronize
async function playerStart() {
  const firstMove = await movePlayer(100, "left"); //pause
  await movePlayer(400, "left"); //pause
  await movePlayer(40, "left"); //pause
  await movePlayer(200, "right"); //pause
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(res => console.log(res));

const fetchUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const resJson = await data.json();
  console.log(resJson, "sadfasdffa");
};
fetchUsers();
