const btnContainer = document.getElementsByClassName("btnContainer")

const newBtn = document.getElementsByClassName("btn")

const colorRed = document.getElementById("red")
const colorBlue = document.getElementById("blue")
const colorGreen = document.getElementById("green")
const colorYellow = document.getElementById("yellow")

let playerAllowed = false

colorRed.addEventListener("click", () => {
    if (playerAllowed === true) {
        changeColor(colorRed)
    }
})
colorBlue.addEventListener("click", () => {
    if (playerAllowed === true) {
        changeColor(colorBlue)
    }
})
colorGreen.addEventListener("click", () => {
    if (playerAllowed === true) {
        changeColor(colorGreen)
    }
})
colorYellow.addEventListener("click", () => {
    if (playerAllowed === true) {
        changeColor(colorYellow)
    }
})

function changeColor(color) {
    color.style.opacity = 1
    color.style.transition = "opacity 0.35s"
    setTimeout(() => {
        color.style.opacity = 0.25
        color.style.transition = "opacity 0.35s"
    }, 750);
}

function randomNumberBetween1and4() {
    return Math.floor(Math.random() * 4) + 1
}


function onOffButton(nb) {
    return new Promise((resolve) => {
        const colorSuit = []

        for (let i = 0; i < nb; i++) {
            setTimeout(() => {
                const colorNb = randomNumberBetween1and4()
                if (colorNb === 1) {
                    changeColor(colorRed)
                    colorSuit.push("red")
                }
                else if (colorNb === 2) {
                    changeColor(colorBlue)
                    colorSuit.push("blue")
                }
                else if (colorNb === 3) {
                    changeColor(colorGreen)
                    colorSuit.push("green")
                }
                else if (colorNb === 4) {
                    changeColor(colorYellow)
                    colorSuit.push("yellow")
                }

                if (i === nb - 1) {
                    playerAllowed = true
                    resolve(colorSuit)
                }
            }, i * 1000)
        }
    })
}

let counter = 1

async function game(nb) {
    let suitTab = await onOffButton(nb)
    console.log(suitTab)
}


game(counter)