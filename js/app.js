const blue = document.getElementById("blue")
const red = document.getElementById("red")
const green = document.getElementById("green")
const yellow = document.getElementById("yellow")




const btns = document.querySelectorAll(".btn")
//fonction quand j'appuie l'opaciter changer pendant un certains temps
function onClickOpacity(btn) {
    btn.addEventListener("click", () => changeOpacity(btn))
}

function changeOpacity(btn) {
    btn.style.opacity = 1
    setTimeout(() => btn.style.opacity = 0.3, 1000)
}

btns.forEach(onClickOpacity)

//fonction qui va changer aleatoirement l'opaciter x fois 
//en modifiant le texte au dessus


function randomPizza() {
    const tabBtns = [blue, red, green, yellow];
    const randomNumber = Math.floor(Math.random() * (4));
    const btn = tabBtns[randomNumber]
    changeOpacity(btn)
}

randomPizza()

function compter() {
    let compter = 3
    for (let i = 0; i<compter; i++) {
        setTimeout(randomPizza(), 1000)
    }
}

compter();