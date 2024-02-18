// Randomly returns either rock, paper, or scissors
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Plays a single round
function playRound(playerSelection, computerSelection) {

    switch(computerSelection) {
        case "Paper":
            if (playerSelection === "rock") {
                return "The computer chose paper. You lose! Paper beats rock.";
            }
            if (playerSelection === "scissors" || playerSelection === "scissor") {
                return "The computer chose paper. You win! Scissors beats paper.";
            }
            if (playerSelection === "paper") {
                return "Tie!";
            }
            break;
        case "Rock":
            if (playerSelection === "paper") {
                return "The computer chose rock. You win! Paper beats rock.";
            }
            if (playerSelection === "scissors" || playerSelection === "scissor") {
                return "The computer chose rock. You lose! Rock beats scissors.";
            }
            if (playerSelection === "rock") {
                return "Tie!";
            }
            break;
        case "Scissors":
            if (playerSelection === "rock") {
                return "The computer chose scissors. You win! Rock beats scissors.";
            }
            if (playerSelection === "paper") {
                return "The computer chose scissors. You lose! Scissors beats paper.";
            }
            if (playerSelection === "scissors" || playerSelection === "scissor") {
                return "Tie!";
            }
            break;
            
        default:
            return "Did you mistype something?";
    }

}

const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Plays a five round game
function playGame() {
    
}