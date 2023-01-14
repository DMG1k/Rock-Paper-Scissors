function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else {
        return "Invalid selection. Please choose rock, paper or scissors.";
    }
}

let playerWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose between Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    alert(result);
    if (result.startsWith("You win")) {
        playerWins++;
    } else if (result.startsWith("You lose")) {
        computerWins++;
    }
}

if (playerWins > computerWins) {
    alert("You are the winner! Congratulations");
} else if (computerWins > playerWins) {
    alert("Computer wins. Better luck next time.");
} else {
    alert("It's a tie!");
}


