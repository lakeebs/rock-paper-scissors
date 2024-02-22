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
      button.classList.add('hide');
      button.classList.remove('show');
      setTimeout(() => {
        button.classList.remove('hide');
        button.classList.add('show');
      }, 1000); // Remove the class after .5 seconds
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
      resetButton.addEventListener('click', () => {
        enableButtons(); // Enable buttons when reset is clicked
        yourScore = 0;
        computerScore = 0;
        results.textContent = "";
        yourScoreBox.textContent = 0;
        computerScoreBox.textContent = 0;
        results.innerHTML = '&nbsp;';
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
                    return "You lose! Paper beats rock.";
                case "Scissors":
                    yourScore++;
                    return "You win! Scissors beats paper.";
                case "Paper":
                    return "Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }

        case "Rock":
            switch (playerSelection) {
                case "Paper":
                    yourScore++;
                    return "You win! Paper beats rock.";
                case "Scissors":
                    computerScore++;
                    return "You lose! Rock beats scissors.";
                case "Rock":
                    return "Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }

        case "Scissors":
            switch (playerSelection) {
                case "Rock":
                    yourScore++;
                    return "You win! Rock beats scissors.";
                case "Paper":
                    computerScore++;
                    return "You lose! Scissors beats paper.";
                case "Scissors":
                    return "Tie!";
                default:
                    return "Hmm, looks like something went wrong.";
            }
            
        default:
            return "Invalid selection by the computer.";
    }

}