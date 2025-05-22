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

green.addEventListener("click", () => playerSequence("green"));
red.addEventListener("click", () => playerSequence("red"));
yellow.addEventListener("click", () => playerSequence("yellow"));
blue.addEventListener("click", () => playerSequence("blue"));

function couleurAleatoire() {
  return colors[Math.floor(Math.random() * colors.length)];
}
//console.log(couleurAleatoire());

function simonSequence() {
  simonPlay.push(couleurAleatoire());
  return simonPlay;
}
//console.log(simonSequence());

function playSimonSequence() {
  let i = 0;
  const interval = setInterval(() => {
    buttonActive(simonPlay[i]);
    i++;
    if (i >= simonPlay.length) {
      clearInterval(interval);
      canClick = true;
    }
  }, 1000);
}

const buttons = {
  green: green,
  red: red,
  yellow: yellow,
  blue: blue,
};

function buttonActive(color) {
  buttons[color].classList.add("active");

  setTimeout(() => {
    buttons[color].classList.remove("active");
  }, 500);
}

function playerSequence(color) {
  if (!canClick) return;

  playerPlay.push(color);
  buttonActive(color);

  const indexActuelle = playerPlay.length - 1;
  if (playerPlay[indexActuelle] !== simonPlay[indexActuelle]) {
    gameOver = true;
    canClick = false;
    document.getElementById("score").textContent =
      "Game Over! ton score est de :" + score;
    return;
  }

  if (playerPlay.length === simonPlay.length) {
    score++;
    updateScore();
    setTimeout(nextRound, 1000);
  }
}

function nextRound() {
  playerPlay = [];
  canClick = false;
  const couleurSuivante = couleurAleatoire();
  simonPlay.push(couleurSuivante);
  playSimonSequence();
}
function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

document.getElementById("start").addEventListener("click", () => {
  if (gameOver) {
    startGame();
  } else {
    nextRound();
  }
});

function startGame() {
  playerPlay = [];
  simonPlay = [];
  score = 0;
  gameOver = false;
  canClick = false;
  updateScore();
  nextRound();
}
