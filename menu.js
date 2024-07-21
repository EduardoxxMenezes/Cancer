function begin(){
  let back = document.getElementById("back")
  let play =  document.getElementById("START");
  let cells = document.getElementById("cellButton");
  let character = document.getElementById("Character");
  let enemy = document.getElementById("Enemy1");
  let floor = document.getElementById("floor");
let attack = document.getElementById("Attack")


play.style.display = "none";
back.style.backgroundImage = "url('./assets/LVL1.png')";
back.style.backgroundSize = "contain";
back.style.backgroundPosition = "top-right";
character.style.display = "flex"
floor.style.display = "block"
enemy.style.display = "flex"
}