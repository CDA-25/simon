const colors = ["green", "red", "yellow", "blue"];
let simonPlay = [];
let playerPlay = [];
// Variables pour le score, l'état du jeu et la possibilité de cliquer
let score = 0;
let gameOver = false;
let canClick = false;

// Récupération des éléments DOM pour chaque couleur
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");

// Objet pour associer les couleurs à leurs boutons respectifs
const buttons = {
  green: green,
  red: red,
  yellow: yellow,
  blue: blue,
};

// Ajout des écouteurs d'événements pour les boutons
green.addEventListener("click", function() { playerSequence("green"); });
red.addEventListener("click", () => playerSequence("red"));
yellow.addEventListener("click", () => playerSequence("yellow"));
blue.addEventListener("click", () => playerSequence("blue"));

// Lancer le jeu en cliquant sur le bouton "start"
document.getElementById("start").addEventListener("click", startGame);



// Fonction pour générer une couleur aléatoire
function couleurAleatoire() {
  return colors[Math.floor(Math.random() * colors.length)];
}
//console.log(couleurAleatoire()); 

// Fonction pour ajouter une nouvelle couleur à la séquence de Simon
function simonSequence() {
  simonPlay.push(couleurAleatoire());
  return simonPlay;
}
//console.log(simonSequence()); 

// Fonction pour activer visuellement un bouton (ajout d'une classe CSS)
function buttonActive(color) {
  buttons[color].classList.add("active");

  setTimeout(() => {
    buttons[color].classList.remove("active");
  }, 500); // Désactivation après 500ms
}

// Fonction pour mettre à jour l'affichage du score
function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

// Fonction pour démarrer le jeu
function startGame() {
  simonPlay = []; 
  playerPlay = []; 
  score = 0; 
  gameOver = false; 
  canClick = false; 
  updateScore(); // Mise à jour du score affiché
  nextRound(); // Lancement du premier tour
}

// Fonction pour gérer le tour suivant
function nextRound() {
  playerPlay = []; 
  canClick = false;
  const nextColor = couleurAleatoire(); 
  simonPlay.push(nextColor); 
  playSimonSequence(); // Lecture de la séquence de Simon
}

// Fonction pour jouer la séquence de Simon
function playSimonSequence() {
  let i = 0;
  const interval = setInterval(() => {
    buttonActive(simonPlay[i]); // Activation visuelle des boutons
    i++;
    if (i >= simonPlay.length) {
      clearInterval(interval); // Arrêt de l'intervalle une fois la séquence terminée
      canClick = true; // Autorisation des clics du joueur
    }
  }, 1000); // Intervalle de 1 seconde entre chaque couleur
}

// Fonction pour gérer les clics du joueur
function playerSequence(color) {
  if (!canClick) return; 
  // Ignorer les clics si ce n'est pas autorisé

  playerPlay.push(color); // Ajout de la couleur cliquée à la séquence du joueur
  buttonActive(color); // Activation visuelle du bouton cliqué

  // Vérifie si le joueur suit la séquence correctement
  const currentIndex = playerPlay.length - 1;
  if (playerPlay[currentIndex] !== simonPlay[currentIndex]) {
    gameOver = true; 
    canClick = false; 
    document.getElementById("score").textContent = "Game Over! Score: " + score; // Affichage du score final
    return;
  }

  // Si le joueur termine la séquence correctement
  if (playerPlay.length === simonPlay.length) {
    score++; 
    updateScore(); // Mise à jour du score affiché
    setTimeout(nextRound, 1000); // Passage au tour suivant après 1 seconde
  }
}
