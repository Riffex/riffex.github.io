console.log("Hellooooooo!");

function joingame(){

  //console.log("Poop");
  var nm = document.getElementById('nm_inpt').value
  console.log(nm);
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://localhost:4000/name", true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(JSON.stringify({
//     name: nm
// }));

fetch("http://localhost:4000/name", {
  method: "POST",
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
    name: nm
  })
}).then(res => {
  console.log(res);
  res.json().then((data) => {
    //interact with the user Here
    document.getElementById('confirmation').innerHTML = "Welcome, "+ data.res

    console.log(data);
  })
});



}

//
/*
Plan:

Have a game where it first asks for everyone's name
Then it randomly selects a player, shows a prompt, and everyone answers as if it were the chosen player
The remaining players try to guess which is the true answer
Once they all submit guesses, the truth is revealed and the players get points if they guesed correctly or if other ppl guessed thier fake answer




*/
