const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScorePara = document.getElementById("player-score");
const computerScorePara = document.getElementById("computer-score");
const commentsPara = document.querySelector(".comments");
const endGame = document.querySelector(".end-game");
const resultPara = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const mainCont = document.querySelector("main");

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    playerScorePara.textContent = playerScore;
    computerScorePara.textContent = computerScore;
}

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.34) {
        return choice = "rock";
    } else if (choice < 0.67) {
        return choice = "paper";
    } else {
        return choice = "scissors";
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function gameOver() {
    mainCont.classList.add("disappear");
    endGame.classList.add("active");
    if(playerScore > computerScore) {
        resultPara.textContent = "Yay, you won!";
    } else {
        resultPara.textContent = "Sorry, you lost!";
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    commentsPara.textContent = "Let's play!";
    mainCont.classList.remove("disappear");
    endGame.classList.remove("active");
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        commentsPara.textContent = "It's a tie!";
    } else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
            playerScore++;
            commentsPara.textContent = `You won! ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`;
        } else {
            computerScore++;
            commentsPara.textContent = `You lost! ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`;
        }
}

function clickHandler(playerChoice) {
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateScore();
    if(playerScore === 5 || computerScore === 5){
        gameOver();
        return;
    }
}

rockBtn.addEventListener("click", () => clickHandler("rock"));
paperBtn.addEventListener("click", () => clickHandler("paper"));
scissorsBtn.addEventListener("click", () => clickHandler("scissors"));
restartBtn.addEventListener("click", () => newGame());
