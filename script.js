window.addEventListener("load", function() {
    const btnPlay = document.getElementById("btnPlay");
    const boxesContainer = document.querySelector(".gridBoxes");
    const boxes = document.querySelectorAll(".box");
    const colors = ["Red", "Blue", "Green", "Yellow"];
    const timerDisplay = document.createElement("div");
    const messageBox = document.getElementById("messageBox");

    let simonSequence = [];
    let userSequence = [];
    let userTurn = false;
    let score;
    let timerInterval;
    let remainingTime;
    // let timer =




    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function lightUpBox(color) {
        const box = document.querySelector(`.box${color}`);
        if (!box) return;
        box.classList.add("lighted");
        setTimeout (() => {
            box.classList.remove("lighted");
        }, 1200);
    }

    async function playSequence() {
        for(let color of simonSequence)
            lightUpBox(color)
        await wait(1400)
    }

    function addToSequence () {
        simonSequence.push(randomColor()) 
    }

    function playerCountdown() {
        clearInterval(timerInterval);
        remainingTime = 5;
        timerDisplay.textContent = `Temps restant : ${remainingTime}s`;

        timerInterval = setInterval(() => {
            remainingTime--;
            timerDisplay.textContent = `Temps restant : ${remainingTime}s`;
            if (remainingTime === 0) {
                clearInterval(timerInterval);
                gameOver("Temps écoulé ! Fin de la partie.")
            }
        }, 1000);
    }

    function gameOver() {
        
    }

    async function gameStart() {
        userTurn = false;
        userSequence = [];
        messageBox.textContent = "Soit prêt ? Simon va jouer !";
        timerDisplay.textContent = "";


        addToSequence();
        playSequence()
    }



    btnPlay.addEventListener("click", function() {
        btnPlay.remove()
        gameStart()
    })


});

