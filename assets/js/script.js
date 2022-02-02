function computerPlay() {
  // To be done
}

let winner;

function round(playerSelection, computerSelection) {
  playerSelection.toLowerCase();

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

function game() {
  let playerWins = 0;
  let computerWins = 0;

  // Play the 5 rounds
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Select one: rock, paper or scissors");

    console.log(round(playerSelection, computerSelection));

    // Check if there's a winner
    if(winner !== 'none') {
      console.log("The winner is: " + winner);
    }

    // Update the score
    if (winner === 'computer') {
      computerWins++;
    }
    else if(winner === 'player') {
      playerWins++;
    }

    // Show the score
    console.log("Player Score: " + playerWins + " | Computer Score: " + computerWins);
  }

  // Final winner/loser
  // To be done
}

game();