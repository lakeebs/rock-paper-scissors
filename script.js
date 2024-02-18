// Randomly return either rock, paper, or scissors
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Play a single round
function playRound(playerSelection, computerSelection) {

    switch(computerSelection) {
        case "Paper":
            switch (playerSelection) {
                case "rock":
                    return "The computer chose paper. You lose! Paper beats rock.";
                case "scissors":
                case "scissor":
                    return "The computer chose paper. You win! Scissors beats paper.";
                case "paper":
                    return "You and the computer both chose paper. Tie!";
                default:
                    return "Did you mistype something?";
            }

        case "Rock":
            switch (playerSelection) {
                case "paper":
                    return "The computer chose rock. You win! Paper beats rock.";
                case "scissors":
                case "scissor":
                    return "The computer chose rock. You lose! Rock beats scissors.";
                case "rock":
                    return "You and the computer both chose rock. Tie!";
                default:
                    return "Did you mistype something?";
            }

        case "Scissors":
            switch (playerSelection) {
                case "rock":
                    return "The computer chose rock. You win! Paper beats rock.";
                case "paper":
                    return "The computer chose scissors. You lose! Scissors beats paper.";
                case "scissors":
                case "scissor":
                    return "You and the computer both chose scissors. Tie!";
                default:
                    return "Did you mistype something?";
            }
            
        default:
            return "Invalid selection by the computer.";
    }

}

const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Play a five round game
function playGame() {
    
}