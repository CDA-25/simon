const couleur = ["vert", "rouge", "jaune", "bleu"];

let simonTurn = [];
let playerTurn = [];

window.addEventListener("load", function () {
  const greenBtn = document.querySelector("#green");
  const greenBtnOn = document.querySelector(".greenOn");

  greenBtn.addEventListener("click", function () {
    const active = greenBtnOn.className;
    if (active === "rgba(0, 128, 0, 0.425)") {
      greenBtnOn.classList.add("green");
      greenBtn.classList.add("rgba(0, 128, 0, 0.425)");
    }
    if (active === "rgba(0, 128, 0, 0.425)") {
      greenBtnOn.classList.add("green");
      greenBtnOn.classList.add("rgba(0, 128, 0, 0.425)");
    }
  });
});
