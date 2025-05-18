window.addEventListener("load", function () {

    // aller chercher les éléménts dans le html

    const redContainer = document.getElementsByClassName("red")
    const greenContainer = document.getElementsByClassName("green")
    const blueContainer = document.getElementsByClassName("blue")
    const yellowContainer = document.getElementsByClassName("yellow")
    const btnPlay = document.querySelector(".btnJouer")
    const allContainers = document.querySelectorAll(".container")


    //function bloquer le clique
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


    // function cliquer pour jouer
    btnPlay.addEventListener("click", () => {
        lockClick()

    })

})