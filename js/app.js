const colors = ["green", "red", "yellow", "blue"];
let simonPlay = [];
let playerPlay = [];
let score = 0;
let gameOver = false;
let canClick = false;

const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");

function couleurAleatoire() {
  return colors[Math.floor(Math.random() * colors.length)];
}
console.log(couleurAleatoire());

function simonSequence() {
  simonPlay.push(couleurAleatoire());
  return simonPlay;
}
console.log(simonSequence());

function buttonActive(color) {
  buttons[color].classList.add("active");

  setTimeout(() => {
    buttons[color].classList.remove("active");
  }, 500);
}

function playerSequence() {}

function startGame() {}
