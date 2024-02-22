// Declare the variables
const buttonsContainer = document.querySelector('#buttons');
const buttons = document.querySelectorAll('#buttons button');
const resetButton = document.createElement('button');
const computerScoreBox = document.querySelector('.computer-score');
const yourScoreBox = document.querySelector('.your-score');
const results = document.querySelector('#results');
const computerBox = document.querySelector('#play-area .right-container');

let computerScore = 0;
let yourScore = 0;

yourScoreBox.textContent = 0;
computerScoreBox.textContent = 0;
results.innerHTML = '&nbsp;';

// Function to disable buttons
function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Function to enable buttons
function enableButtons() {
  buttons.forEach(button => {
    button.disabled = false;
  });
}

// Event listener for button clicks using event delegation
buttonsContainer.addEventListener('click', buttonClick);

// Button click handler
function buttonClick(e) {
  if (gameOver(yourScore, computerScore)) {
    return; // If game is over, return early
  }

  const clickedButton = e.target;
  const allButtons = document.querySelectorAll('button');

  buttons.forEach(button => {
    if (button !== clickedButton) {
      button.classList.add('fade-out');
      button.classList.remove('fade-in');
      setTimeout(() => {
        button.classList.remove('fade-out');
        button.classList.add('fade-in');
      }, 500); // Remove the class after .5 seconds
    }
  });

  if (e.target.matches('button')) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection); 
    results.textContent = roundResult;
    computerBox.innerHTML = '<button type="button" class="choice ' + computerSelection.toLowerCase() + '">' + computerSelection + '</button>';

    // Update scores
    yourScoreBox.textContent = yourScore;
    computerScoreBox.textContent = computerScore;

    // Check for game over
    const winner = gameOver(yourScore, computerScore);
    if (winner) {
      results.textContent = winner;
      disableButtons();

      // Append reset button
      resetButton.textContent = "Play again?";
      resetButton.classList.add('reset');
      document.querySelector('#score').classList.add('fade-out');
      document.querySelector('#play-area').classList.add('fade-out');
      document.querySelector('#results').classList.add('fade-out');
      resetButton.addEventListener('click', () => {
        enableButtons(); // Enable buttons when reset is clicked
        yourScore = 0;
        computerScore = 0;
        results.textContent = "";
        yourScoreBox.textContent = 0;
        computerScoreBox.textContent = 0;
        results.innerHTML = '&nbsp;';
        document.querySelector('#score').classList.remove('fade-out');
        document.querySelector('#play-area').classList.remove('fade-out');
        document.querySelector('#results').classList.remove('fade-out');
        document.querySelector('#score').classList.add('fade-in');
        document.querySelector('#play-area').classList.add('fade-in');
        document.querySelector('#results').classList.add('fade-in');
        resetButton.remove();
      });

      document.querySelector('#main').appendChild(resetButton);
    }
  }
}

// Declare the winner
function gameOver(yourScore, computerScore) {
  if (yourScore === 5 || computerScore === 5) {
    if (yourScore === 5) {
      return "You win!";
    } else if (computerScore === 5) {
      return "Computer wins!";
    }
  }
  return ""; // Return empty string if the game is not over
}

// Get computer choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

// Play a round
function playRound(playerSelection, computerSelection) {

    switch(computerSelection) {
        case "Paper":
            switch (playerSelection) {
                case "Rock":
                    computerScore++;
                    return "The computer chose paper. You lose! Paper beats rock.";
                case "Scissors":
                    yourScore++;
                    return "The computer chose paper. You win! Scissors beats paper.";
                case "Paper":
                    return "You and the computer both chose paper. Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }

        case "Rock":
            switch (playerSelection) {
                case "Paper":
                    yourScore++;
                    return "The computer chose rock. You win! Paper beats rock.";
                case "Scissors":
                    computerScore++;
                    return "The computer chose rock. You lose! Rock beats scissors.";
                case "Rock":
                    return "You and the computer both chose rock. Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }

        case "Scissors":
            switch (playerSelection) {
                case "Rock":
                    yourScore++;
                    return "The computer chose scissors. You win! Rock beats scissors.";
                case "Paper":
                    computerScore++;
                    return "The computer chose scissors. You lose! Scissors beats paper.";
                case "Scissors":
                    return "You and the computer both chose scissors. Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }
            
        default:
            return "Invalid selection by the computer.";
    }

}