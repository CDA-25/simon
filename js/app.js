window.addEventListener("load", function () {

    // aller chercher les éléménts dans le html

    const redContainer = document.querySelector(".red")
    const greenContainer = document.querySelector(".green")
    const blueContainer = document.querySelector(".blue")
    const yellowContainer = document.querySelector(".yellow")
    const btnPlay = document.querySelector(".btnJouer")
    const allContainers = document.querySelectorAll(".container")
    const messageActif = document.querySelector(".message")



    let clickLocked = false
    const colors = ["red", "green", "blue", "yellow"]
    let simonSay = []
    let playerSay = []

    const randomColorInTab = (tab) => {
        if (tab.length === 0) {
            return null
        } else {
            return tab[Math.floor(Math.random() * tab.length)]
        }
    }

    // function changer la couleur de la div >>>

    function playColor(color) {
        switch (color) {
            case "red":
                redContainer.classList.add("redActif")
                setTimeout(() => redContainer.classList.remove("redActif"), 1000)
                break;
            case "blue":
                blueContainer.classList.add("blueActif")
                setTimeout(() => blueContainer.classList.remove("blueActif"), 1000)
                break;
            case "green":
                greenContainer.classList.add("greenActif")
                setTimeout(() => greenContainer.classList.remove("greenActif"), 1000)
                break;
            case "yellow":
                yellowContainer.classList.add("yellowActif")
                setTimeout(() => yellowContainer.classList.remove("yellowActif"), 1000)
                break;
            default: return null
        }
    }

    //function pour Initialisé le jeu :
    function initGame() {
        simonSay = []
        playerSay = []
        nextLevel()
    }

    function showSimonMsg() {
        messageActif.textContent = "C'est au tour de Simon, écoute bien !"
    }

    function showPlayerMsg() {
        messageActif.textContent = "À toi de jouer !"
    }

    //fonction startGame
    function nextLevel() {
        showSimonMsg()
        playerSay = []
        simonSay.push(randomColorInTab(colors))
        lockClick()
        simonSay.forEach((color, index) => {
            setTimeout(() => playColor(color), index * 1200)
        })
        setTimeout(() => { unlockClick(), showPlayerMsg() }, simonSay.length * 1200)
    }

    redContainer.addEventListener("click", () => playerClick("red"))
    greenContainer.addEventListener("click", () => playerClick("green"))
    blueContainer.addEventListener("click", () => playerClick("blue"))
    yellowContainer.addEventListener("click", () => playerClick("yellow"))

    // joueur play : 
    function playerClick(color) {
        if (clickLocked) return
        playColor(color)
        playerSay.push(color)

        const currentIndex = playerSay.length - 1
        if (playerSay[currentIndex] !== simonSay[currentIndex]) {
            alert("Tu as perdu ! Essaie encore !")
            initGame()
            return
        }
        if (playerSay.length === simonSay.length) {
            messageActif.setAttribute("p", "Simon Says :")
            setTimeout(nextLevel, 1000)
        }
    }

    btnPlay.addEventListener("click", () => initGame())


    // fonction bloqué et débloquer les cliques >>>

    function lockClick() {
        clickLocked = true
        allContainers.forEach(container => {
            container.classList.add("no-click")
        })
    }

    function unlockClick() {
        clickLocked = false
        allContainers.forEach(container => {
            container.classList.remove("no-click")
        })
    }


})


// Initialiser le jeu – Pour remettre tout à zéro quand une partie commence.

// Ajouter une couleur à la séquence – Gérer l'évolution du niveau.

// Jouer la séquence – Afficher la séquence à l'utilisateur avec sons/lumières.

// Animer un bouton – Pour le feedback visuel quand une couleur est jouée.

// Vérifier la réponse du joueur – Comparer la saisie utilisateur à la séquence attendue.

// Gérer une erreur (mauvaise réponse) – Pour réagir quand le joueur se trompe.

// Gérer la victoire (fin de séquence réussie) – Et passer à l’étape suivante.

// Afficher un score ou niveau – Pour garder une trace de la progression.

// Jouer un son associé à une couleur – Pour plus de feedback sensoriel.

// Gérer le mode strict / normal – Si tu veux ajouter un peu de difficulté.

// Mettre le jeu en pause / reprendre – Bonus pour une meilleure UX.

// Faire clignoter une couleur – Pour les animations de séquence ou erreurs.

// Fonction d’attente entre deux étapes – Pour temporiser les animations ou entrées.