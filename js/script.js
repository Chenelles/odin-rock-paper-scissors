//function to get computer choice
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

//variables for choices//
const computerChoice = getComputerChoice();
const playerChoice = "";

//variables for scores//
let playerScore = 0;
let computerScore = 0;

//for number of rounds
let i = 1; 

//function to play one round//
function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    console.log(`Computer picks ${computerChoice}`); //console to check//
    playerChoice = prompt(`Round ${i}! Choose your weapon (Rock/Paper/Scissors)!`).toLowerCase();
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Oops, you didn't pick the right weapon. Please, try again! Choose your weapon (Rock/Paper/Scissors)!").toLowerCase();
        }
    console.log(`Player picks ${playerChoice}`); //console to check//
    if (playerChoice === computerChoice) {
        return alert(`"It's a tie! You both used ${playerChoice}"`);
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
            computerScore++;
            return alert(`"You lose, ${computerChoice} beats ${playerChoice}!"`);
        } else {
            playerScore++;
            return alert(`"You win, ${playerChoice} beats ${computerChoice}! "`);
        }
    }

//function with loop to play 5 rounds
function game() {
    for (i = 1; i <= 5; i++) {
        playRound(playerChoice, computerChoice);
        console.log(playerScore);                         //to check //
        console.log(computerScore);                       //to check //
    }
}

//play the game//
game();

//end of game//
alert(`Game over! Final result is COMPUTER: ${computerScore}; PLAYER: ${playerScore}.`);
