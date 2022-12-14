const btns = document.querySelectorAll(".btn");
const house = document.querySelector(".house");
const yourPick = document.querySelector(".your-pick");
const houseBg = document.querySelector(".house-animation");
const winnerText = document.querySelector(".winner");
const winner = document.querySelector(".display-winner");
const displayResult = document.querySelector(".display-result");
const score = document.querySelector(".score");
const playAgain = document.querySelector(".play-again");
const game = document.querySelector(".game");
let optionsArray = ["rock", "paper", "scissors"];
let count = 0;
let randomChoose = optionsArray[Math.floor(Math.random() * optionsArray.length)];


/* On click display results with timming */

btns.forEach(btn =>
    btn.addEventListener("click", () => {
        game.style.display = "none"
        displayResult.style.display = "grid"
        yourPick.innerHTML = `<div class="btn-bdr ${btn.dataset.choice}-bdr"> <div class="btn-bg"> <img src ="./images/icon-${btn.dataset.choice}.svg">`
        mychoosen = btn.dataset.choice
        setTimeout(() => {
            computerChoose()
            houseBg.style.background = "none"
            houseBg.style.animation = "none"
                setTimeout(() => displayWinner(mychoosen), 500);
        }, 1750)
    })
)


/* Display random computer choose */

let computerChoose = () => {
    house.innerHTML = `<div class="btn-bdr ${randomChoose}-bdr"> <div class="btn-bg"> <img src ="./images/icon-${randomChoose}.svg">`
}


/* Display winner */

let displayWinner = (mychoosen) => {
    winner.style.display = "block"
    if(mychoosen === randomChoose) {
        winnerText.textContent = "IT'S A DRAW!"
    } else if(
        (mychoosen === "rock" && randomChoose === "scissors") ||
        (mychoosen === "paper" && randomChoose === "rock") ||
        (mychoosen === "scissors" && randomChoose === "paper")) {
        winnerText.textContent = "YOU WIN!"
        countingScore(1)
    } else {
        winnerText.textContent = "YOU LOOSE!"
        countingScore(-1)
    }
}


/* Count points */

let countingScore = (value) => {
    count += value
    score.innerHTML = count
}


/* Clear game */

playAgain.addEventListener("click", () => {
    displayResult.style.display = "none"
    game.style.display = "grid"
    winner.style.display = "none"
    house.innerHTML = ""
    houseBg.style.background = ""
    houseBg.style.animation = ""

})
