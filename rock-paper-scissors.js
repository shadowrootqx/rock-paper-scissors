// Game logic:
// Rock beats scissors and looses to paper. 
// Paper beats rock and looses to scissors.
// Scissors beats paper and looses to rock.

console.log("A new game! --------------------->");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // Math.random generates numbers
    // between 0 and 0.999.. By multiplying with 3, we get numbers between 0 and 2.999..Math.floor()
    // rounds to first lower integer so we get the numbers 0, 1 or 2.

    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Your choice:");
    // If user hits cancel or does not type anything
    if (!humanChoice) return "";
    return humanChoice;
}

// Main funnction. Calls playRound 5 times and shows the winner
function playGame() {
    // Declare variables to keep score
    let humanScore = 0;
    let computerScore = 0;

    // Compare human choice and computer choice and increment scores
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        // Treat equality first
        if (humanChoice === computerChoice) {
            console.log(`Draw. Both chose ${humanChoice}`);
            return;
        }

        // First case - user chooses rock
        if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            console.log("You win this round! Rock beats Scissors.");
            humanScore++;
        }
        else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            console.log("You lose this round! Paper beats Rock.");
            computerScore++;
        }

        // Second case - user chooses paper
        else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            console.log("You win this round! Paper beats Rock!");
            humanScore++;
        }
        else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            console.log("You lose this round! Scissors beats Paper.");
            computerScore++;
        }

        // Third case - user chooses scissors
        else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            console.log("You win this round! Scissors beats Paper.");
            humanScore++;
        }
        else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            console.log("You lose this round! Rock beats Scissors.");
            computerScore++;
        }

        else {
            console.log("Invalid choice.");
        }
    }

    // Loop to play the game 5 times
    for (let i = 0; i < 5; i++) {
        // Get human and computer choice in variables to allow the calling of playRound
        const humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection}.`);
        const computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}.`);

        playRound(humanSelection, computerSelection); // Scores are calculated by this function
    }

    // Check who is the winner
    if (humanScore > computerScore) {
        console.log(`Human wins. Human score is ${humanScore} while computer score is ${computerScore}.`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer wins. Computer score is ${computerScore} while human score is ${humanScore}.`);
    }
    else {
        console.log(`Draw. Human score is ${humanScore} while computer score is ${computerScore}.`);
    }
}

playGame();