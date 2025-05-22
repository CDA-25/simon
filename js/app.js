// window.addEventListener("load", function() {

// // aller chercher les éléménts dans le html

// // function cliquer pour jouer
// btnPlay.addEventListener("clique", function() {})


//const caseSelector = document.querySelector(".container")
// })

const colors = ['red', 'blue', 'green', 'yellow'] // Je crée mon tab de couleur

let iaColorsSerie = []
let userColorsSerie = []

function getRandomColor(colors) {                       // Fonction pour avoir une couleur aléatoire
    const index = Math.round(Math.random() * 3)      // declare une const qui récupere un chiffe aléatoire de 0 à 3
    const color = colors[index]                       // declare une const qui est égale a l'index aleatoire du tableau colors
    return color   
}

function pushColortoIASerie(color) {
    iaColorsSerie.push(color)
}


console.log(getRandomColor(colors))

let color = getRandomColor(colors)

pushColortoIASerie(color)

console.log(iaColorsSerie)


// il faut que je crée un timer de 5 seconde qui se remet à 0 entre chaque clique et if timer = 0, partie perdu

window.addEventListener("load", function () {

    // aller chercher les éléménts dans le html

    const redContainer = document.getElementsByClassName("red")
    const greenContainer = document.getElementsByClassName("green")
    const blueContainer = document.getElementsByClassName("blue")
    const yellowContainer = document.getElementsByClassName("yellow")
    const btnPlay = document.querySelector(".btnJouer")
    const allContainers = document.querySelectorAll(".container")

    // function cliquer pour jouer
    btnPlay.addEventListener("click", () => {
        lockClick()

    })


    //functions pour bloquer ou débloquer les cliques ici >>>
    let clickLocked = false

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