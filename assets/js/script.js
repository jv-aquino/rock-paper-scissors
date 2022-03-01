let playerWins, computerWins;
let buttonID;
playerWins = 0;
computerWins = 0;

const playerWinsHTML = document.querySelector('.player h2');
const computerWinsHTML = document.querySelector('.computer h2');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  buttonID = button.id;
  button.addEventListener('click', playerSelect);
})

function playerSelect(buttonID) {
  if (getGameWinner() != 'none') return;

  let playerSelection = buttonID;
  playRound(playerSelection, computerPlay());
}

function playRound(playerSelection, computerSelection) {
  let roundWinner = 'none';
  
  roundWinner = getRoundWinner(computerSelection, playerSelection);

  updateScore(roundWinner);
}

function updateScore(roundWinner) {
  if (roundWinner === 'computer') {
    computerWins++;
    computerWinsHTML.textContent = computerWins;
  }
  else if(roundWinner === 'player') {
    playerWins++;
    playerWinsHTML.textContent = playerWins;
  }
}

function getRoundWinner(computerSelection, playerSelection) {
  // Player loses
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'computer';
  } 
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'computer';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'computer';
  }

  // Player wins
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'player';
  } 
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player';
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'player';
  }
  
  // Tie
  else {
    return 'none';
  }
}

function getGameWinner() {
  if (playerWins === 5) {
    displayWinner('player');
    return 'player';
  }
  else if (computerWins === 5) {
    displayWinner('computer');
    return 'computer';
  }
  else {
    return 'none';
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

function displayWinner(winner) {

}