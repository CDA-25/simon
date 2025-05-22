const blue = document.getElementById(`blue`)
const red = document.getElementById(`red`)
const green = document.getElementById(`green`)
const yellow = document.getElementById(`yellow`)
const btns = document.querySelectorAll(`.btn`)

let sequence = []
let scoreHistory = []
let btnToVerify = 0
let playerCanPlay = false
let inactivityTimer = null
let gamesCounter = 1

function computerTurn() {
    playerCanPlay = false
    btnToVerify = 0
    clearTimeout(inactivityTimer)

    document.getElementById(`text`).textContent = `Regarde bien ce qu'il se passe fada`
    addInSequence()
    playSequence()

    const totalDuration = sequence.length * 1200
    setTimeout(() => {
        playerTurn()
    }, totalDuration)
}

function playerTurn() {
    playerCanPlay = true
    document.getElementById(`text`).textContent = `À toi de jouer l'ancien`
    startInactivityTimer()
}

btns.forEach(btn => {
    btn.addEventListener(`click`, () => {
        if (!playerCanPlay) return

        clearTimeout(inactivityTimer)
        startInactivityTimer()
        changeOpacity(btn)

        if (btn !== sequence[btnToVerify]) {
            document.getElementById(`text`).textContent = `Dommage le S, tia perdu... Ton score : ${sequence.length - 1} points`
            playerCanPlay = false
            scoreHistory.push({gameNumber : gamesCounter, score : sequence.length - 1})
            showReplayButton()
            showScoreboard()
            return
        }

        btnToVerify++

        if (btnToVerify === sequence.length) {
            document.getElementById(`text`).textContent = `Tié un tigre, prépare-toi pour la suite`
            playerCanPlay = false
            clearTimeout(inactivityTimer)
            setTimeout(computerTurn, 2000)
        }
    })
})

function startInactivityTimer() {
    inactivityTimer = setTimeout(() => {
        if (playerCanPlay) {
            document.getElementById(`text`).textContent = `Tié un escargot, tia perdu ! Ton score : ${sequence.length - 1} points`
            playerCanPlay = false
            scoreHistory.push({gameNumber : gamesCounter, score : sequence.length - 1})
            showReplayButton()
            showScoreboard()
        }
    }, 5000)
}

function randomButton() {
    const tabBtns = [blue, red, green, yellow]
    return tabBtns[Math.floor(Math.random() * 4)]
}

function addInSequence() {
    sequence.push(randomButton())
}

function changeOpacity(btn) {
    btn.style.opacity = 1
    setTimeout(() => btn.style.opacity = 0.3, 1000)
}

function playSequence() {
    for (let i = 0; i < sequence.length; i++) {
        setTimeout(() => changeOpacity(sequence[i]), i * 1200)
    }
}

function resetGame() {
    sequence = []
    btnToVerify = 0
    playerCanPlay = false
    gamesCounter++
    clearTimeout(inactivityTimer)
}

function showReplayButton() {
    const replayBtn = document.createElement("button")
    replayBtn.textContent = "ROMET"
    replayBtn.classList.add("btnRejouer")

    replayBtn.addEventListener("click", () => {
        replayBtn.remove()
        resetGame()
        computerTurn()
    })

    const container = document.getElementById("text")
    container.append(replayBtn)
}

function showScoreboard() {
    const sortedScores = [...scoreHistory].sort((a, b) => b.score - a.score)

    let scoreboard = document.getElementById("scoreboard")
    if (scoreboard) scoreboard.remove()

    scoreboard = document.createElement("div")
    scoreboard.id = "scoreboard"

    const title = document.createElement("h2")
    title.textContent = "Classement"
    scoreboard.appendChild(title)

    const list = document.createElement("ol")
    sortedScores.forEach(({gameNumber, score}) => {
        const li = document.createElement("li")
        li.textContent = `Partie ${gameNumber} : ${score} points`
        list.appendChild(li)
    })
    scoreboard.appendChild(list)

    document.body.appendChild(scoreboard)
}

computerTurn()