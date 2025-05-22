// faire avec getelementbyId et ajouter id dans le html au lieu d'une classe pour voir si ça marche

window.addEventListener('load', function () {
const tiles = document.querySelectorAll(".blue, .green, .yellow, .red");
const btnPlay = document.querySelector('.btnJouer');
const message = document.querySelector('.msgActifPlayer')
  
const colors = ['red', 'blue', 'green', 'yellow']; // Je crée mon tab de couleur
  let iaSequence = [];
  let playerSequence = [];
  let gameActive = false;

  // Démarre une nouvelle partie en réinitialisant les séquences et en générant une nouvelle séquence
  function startGame(){
    iaSequence=[];
    playerSequence= [];
    gameActive = true;
    message.textContent='Simon says : Suivez la séquence !';
    generateSequence();
  }

  // Génère un ajout aléatoire à la séquence.
  function generateSequence(){
    iaSequence.push(getRandomColor(colors));
    displaySequence();
  }

  // Affiche la séquence en la faisant clignoter
  function displaySequence(){
    let i=0;
    const interval= setInterval(function(){
      highlightTile(iaSequence[i]);
      i++;

      if(i>=iaSequence.length){
        clearInterval(interval);
        message.textContent="A ton tour !";
      }
    }, 1000);
  }

  // Fait clignoter un bouton
  function highlightTile(color){
    const button = document.querySelector(`.${color}`);
    button.classList.add('actif');
    setTimeout(function(){
      button.classList.remove('actif')
    }, 500);
  }
  
  // Vérifie si la séquence du joueur est correcte
  function checkPlayerSequence(){
    const eachClickIndex = playerSequence.length - 1;
    // Si on met cette ligne, ça vérifie juste à la fin de la séquence
    // if(playerSequence.length!==iaSequence.length)
    // Là on vérifie à chaque click
    if(playerSequence[eachClickIndex] !== iaSequence[eachClickIndex]) {
      endGame();
    } else {
      if(playerSequence.length === iaSequence.length) {
        message.textContent = 'Bien joué !';
        playerSequence=[];

        setTimeout(function(){
          generateSequence();
        }, 500);
      }
    }
  }
  // Termine le jeu si le joueur fait une erreur
  function endGame(){
    gameActive=false;
    message.textContent='Dommage, c\'est perdu.';
  }

  // Fonction pour avoir une couleur aléatoire
  function getRandomColor(colors) {
    // math.round serait plus imprévisible, math.floor on est sûr que ca arrondie vers le bas
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    return color;
  }

  tiles.forEach(tile => {
    tile.addEventListener('click', function(){
      if(gameActive){
        // récupère la couleur du bouton cliqué
        const color=tile.classList[0];
        playerSequence.push(color);
        highlightTile(color);
        checkPlayerSequence();
      }
    });
  });
  
  btnPlay.addEventListener('click', function (){
    if(!gameActive){
      startGame();
    }
  });

  //btnPlay.addEventListener('click', startGame());
});


/*
  function gameTurn() {
    on = false;
    if (flash === turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      on = true;
    }
*/
/*function flash() {
  setTimeout(()=> ...arguments, 5000);
  // on a une séquence vide,

  // Dans la séquence vide on va y mettre la tuile choisie aléatoirement
  // les tuiles sont allumées de façon aléatoire
  // entre chaque affichage de tuile il y a un temps
}

function playGame() {
    await flash
}
*/
/*
  function playGame() {
    // si la séquence du joueur est bonne on push un autre nombre aléatoire dans sequence ia
    // Sinon si le temps est excédé, dire au joueur qu'il a perdu : il a pris trop de temps
    // Sinon la séquence n'est pas la meme, dire au joueur qu'il a perdu
  }
*/
/*function rejouer() {
      // si le joueur click sur rejouer, on relance le jeu playgame
      // sinon ne rien faire / afficher à bientôt et fermer la fenetre
    }
  }
});
*/
// il faut que je crée un timer de 5 seconde qui se remet à 0 entre chaque clique et if timer = 0, partie perdu
