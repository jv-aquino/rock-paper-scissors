let winner;
let playerWins, computerWins;

function game() {
  playerWins = 0;
  computerWins = 0;

  // Play the 5 rounds
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Select one: rock, paper or scissors");

    console.log(playRound(playerSelection, computerSelection));

    updateScore();

    // Show the score
    console.log("Player Score: " + playerWins + " | Computer Score: " + computerWins);
  }

  // Final winner/loser
  if (computerWins > playerWins) {
    console.log("The computer won!");
  }
  else if (playerWins > computerWins) {
    console.log("The player won!");
  }
  else {
    console.log("Nobody won! Tie!");
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // Player loses
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    winner = 'computer';
    return "You Lose! Paper beats Rock";
  } 
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winner = 'computer';
    return "You Lose! Scissors beats Paper";
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winner = 'computer';
    return "You Lose! Rock beats Scissors";
  }

  // Player wins
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = 'player';
    return "You Won! Paper beats Rock";
  } 
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = 'player';
    return "You Won! Scissors beats Paper";
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winner = 'player';
    return "You Won! Rock beats Scissors";
  }
  

  // Tie
  else {
    winner = 'none';
    return "Tie!";
  }
}

function updateScore() {
  if (winner === 'computer') {
    computerWins++;
  }
  else if(winner === 'player') {
    playerWins++;
  }
}

function computerPlay() {
  let choose = Math.floor(Math.random() * 3) + 1;
  // Randomly gets a number from 1 to 3
  // Then turns it into Rock, Paper or scissors
  if (choose === 1) {
    return "rock";
  }
  else if (choose === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

game();