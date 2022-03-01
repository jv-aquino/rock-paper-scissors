let playerWins, computerWins;
playerWins = 0;
computerWins = 0;
let buttonID;
let winner = 'none';

let roundResultText = '';
const result = document.querySelector('#result');
const roundResult = document.querySelector('#result h2');
const playerWinsHTML = document.querySelector('.player h2');
const computerWinsHTML = document.querySelector('.computer h2');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  buttonID = button.id;
  button.addEventListener('click', playerSelect);
})

function playerSelect(buttonID) {
  let playerSelection = buttonID;
  playRound(playerSelection, computerPlay());
}

function playRound(playerSelection, computerSelection) {

  if (winner != 'none') return;

  let roundWinner = 'none';
  roundWinner = getRoundWinner(computerSelection, playerSelection);

  updateScore(roundWinner);
  roundResult.textContent = roundResultText;
  result.style.cssText = 'height: fit-content; font-size: 40px; padding: 10px;'

  winner = getGameWinner();
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
    roundResultText = 'You lose! Paper beats rock!';
    return 'computer';
  } 
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    roundResultText = 'You lose! Scissors beats paper!';
    return 'computer';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    roundResultText = 'You lose! Rock beats scissors!';
    return 'computer';
  }

  // Player wins
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundResultText = 'You win! Paper beats rock!';
    return 'player';
  } 
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundResultText = 'You win! Scissors beats paper!';
    return 'player';
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    roundResultText = 'You win! Rock beats scissors!';
    return 'player';
  }
  
  // Tie
  else if (playerSelection === computerSelection) {
    roundResultText = 'Tie!';
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
  const h1 = document.createElement('h1');
  h1.textContent = 'The final winner is the ' + winner + '!!!';
  h1.classList.add('finalScoreH1');
  
  const finalScore = document.querySelector('.finalScore');
  finalScore.appendChild(h1);

  buttons.forEach(button => {
    button.removeEventListener('click', playerSelect);
  });
}