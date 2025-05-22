const btnContainer = document.getElementsByClassName("btnContainer")

const newBtn = document.getElementsByClassName("btn")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")
const end = document.getElementById("bravo")

const colorRed = document.getElementById("red")
const colorBlue = document.getElementById("blue")
const colorGreen = document.getElementById("green")
const colorYellow = document.getElementById("yellow")

let counter = 1
let sequence = []
let userSequence = []
let userAllowed = false

colorRed.addEventListener("click", () => {
    if (userAllowed) {
        changeColor(colorRed)
        userSequence.push(1)
        if (userSequence.length === sequence.length) {
            if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
                counter++
                userAllowed = false
                userSequence = []
                score.innerHTML = "Score :<br>" + (counter - 1)
                setTimeout(() => {
                    game(counter)
                }, 1000);
            } else {
                end.textContent = "Bravo !"
                resetGame()
            }
        }
    }
})
colorBlue.addEventListener("click", () => {
    if (userAllowed) {
        changeColor(colorBlue)
        userSequence.push(2)
        if (userSequence.length === sequence.length) {
            if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
                counter++
                userAllowed = false
                userSequence = []
                score.innerHTML = "Score :<br>" + (counter - 1)
                setTimeout(() => {
                    game(counter)
                }, 1000);
            } else {
                end.textContent = "Bravo !"
                resetGame()
            }
        }
    }
})
colorGreen.addEventListener("click", () => {
    if (userAllowed) {
        changeColor(colorGreen)
        userSequence.push(3)
        if (userSequence.length === sequence.length) {
            if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
                counter++
                userAllowed = false
                userSequence = []
                score.innerHTML = "Score :<br>" + (counter - 1)
                setTimeout(() => {
                    game(counter)
                }, 1000);
            } else {
                end.textContent = "Bravo !"
                resetGame()
            }
        }
    }
})
colorYellow.addEventListener("click", () => {
    if (userAllowed) {
        changeColor(colorYellow)
        userSequence.push(4)
        if (userSequence.length === sequence.length) {
            if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
                counter++
                userAllowed = false
                userSequence = []
                score.innerHTML = "Score :<br>" + (counter - 1)
                setTimeout(() => {
                    game(counter)
                }, 1000);
            } else {
                end.textContent = "Bravo !"
                resetGame()
            }
        }
    }
})

function changeColor(color) {
    color.style.opacity = 1
    color.style.transition = "opacity 0.35s"
    setTimeout(() => {
        color.style.opacity = 0.25
        color.style.transition = "opacity 0.35s"
    }, 500);
}

function randomNumberBetween1and4() {
    return Math.floor(Math.random() * 4) + 1
}

async function onOffButton(nb) {
    let randomNumber = randomNumberBetween1and4()
    sequence.push(randomNumber)
    for (let i = 0; i < sequence.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 750))
        if (sequence[i] === 1) changeColor(colorRed)
        if (sequence[i] === 2) changeColor(colorBlue)
        if (sequence[i] === 3) changeColor(colorGreen)
        if (sequence[i] === 4) changeColor(colorYellow)
    }
}

async function game(nb) {
    end.textContent = ""
    await onOffButton(nb)
    console.log(sequence)
    userAllowed = true
}

function resetGame() {
    sequence = []
    userSequence = []
    counter = 1
    userAllowed = false
}
    
startBtn.addEventListener("click", () => {
    setTimeout(() => {
        changeColor(colorRed)
        changeColor(colorBlue)
        changeColor(colorGreen)
        changeColor(colorYellow)
        setTimeout(() => {
            game(counter)
        }, 1000);
    }, 250);
})