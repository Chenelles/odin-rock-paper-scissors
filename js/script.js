let playerChoice = prompt("Choose your weapon (Rock/Paper/Scissors)!").toLowerCase();
while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
    playerChoice = prompt("Oops, you didn't pick the right weapon. Please, try again! Choose your weapon (Rock/Paper/Scissors)!").toLowerCase();
}
// 'while' in case user puts incorrect value - for that reason I used 'let' instead of 'const'
console.log(playerChoice);
// got player choice

let choice = Math.random();
function getComputerChoice() {
if (choice < 0.34) {
    return "rock";
} else if (choice < 0.67) {
    return "paper";
} else {
    return "scissors";
}
}
const computerChoice = getComputerChoice();

console.log(choice);
console.log(computerChoice);
//got computer choice

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return alert(`"It's a tie! You both used ${playerChoice}"`);
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
            return alert(`"You lose, ${computerChoice} beats ${playerChoice}!"`);
        } else {
            return alert(`"You win, ${playerChoice} beats ${computerChoice}! "`);
        }
    }
let round = playRound(playerChoice, computerChoice);
console.log(round); // why it throws 'undefined'?
// got function to play one round