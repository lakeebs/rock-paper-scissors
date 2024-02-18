// Randomly return either rock, paper, or scissors
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let computerScore = 0;
let yourScore = 0;

// Play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Game canceled";
    }

    switch(computerSelection) {
        case "Paper":
            switch (playerSelection.toLowerCase()) {
                case "rock":
                    computerScore++;
                    return "The computer chose paper. You lose! Paper beats rock.";
                case "scissors":
                case "scissor":
                    yourScore++;
                    return "The computer chose paper. You win! Scissors beats paper.";
                case "paper":
                    return "You and the computer both chose paper. Tie!";
                default:
                    return "Did you mistype something?";
            }

        case "Rock":
            switch (playerSelection.toLowerCase()) {
                case "paper":
                    yourScore++;
                    return "The computer chose rock. You win! Paper beats rock.";
                case "scissors":
                case "scissor":
                    computerScore++;
                    return "The computer chose rock. You lose! Rock beats scissors.";
                case "rock":
                    return "You and the computer both chose rock. Tie!";
                default:
                    return "Did you mistype something?";
            }

        case "Scissors":
            switch (playerSelection.toLowerCase()) {
                case "rock":
                    yourScore++;
                    return "The computer chose scissors. You win! Rock beats scissors.";
                case "paper":
                    computerScore++;
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

// Play a five round game
function playGame() {
    const loopTime = 5;

    for (let i = 0; i < loopTime; i++) {

        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

    }

    console.log("Computer: " + computerScore + " | You: " + yourScore);

    if (computerScore > yourScore) {
        console.log("You lose!");
    } else if (yourScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();