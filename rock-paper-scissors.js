// Game logic:
// Rock beats scissors and looses to paper. 
// Paper beats rock and looses to scissors.
// Scissors beats paper and looses to rock.

console.log("A new game! --------------------->");

// Declare variables to keep score. They should be global as they will be accessed
// by both playRound and playGame functions
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); //Math.random genereaza numere
    // intre 0 si 0.999.. Inmultind cu 3, obtinem numere intre 0 si 2.999..Math.floor()
    // rotunjeste in jos la primul intreg deci vom obtine mereu 0, 1 sau 2

    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Your choice:");
    return humanChoice;
}

// Compare human choice and computer choice and increment scores
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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

    else if (humanChoice === computerChoice) {
        console.log("Draw.");
    }
}

// Main funnction. Calls playRound 5 times and shows the winner
function playGame() {
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