let computerScore = 0;
let humanScore = 0;
let gamesPlayed = 0;

// Function returns random computer choice for rock/paper/scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        console.log("Computer choice is rock");
    } else if (computerChoice === 2) {
        console.log("Computer choice is paper");   
    } else {
        console.log("Computer choice is scissors");
    }
    return computerChoice;
}

// Get human choice with buttons
function getHumanChoice() {
    let humanChoice = 0;

    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener('click', function() {
        if (gamesPlayed < 5) {
            console.log('Human choice is: rock!'); 
            humanChoice = 1;
            playRound(humanChoice, getComputerChoice());
        } else {
            alert("Game over!");
            decideWinner();
        }
    });

    paper.addEventListener('click', function() {
        if (gamesPlayed < 5) {
            console.log('Human choice is: paper!');
            humanChoice = 2;
            playRound(humanChoice, getComputerChoice());
        } else {
            alert("Game over!");
            decideWinner();
        } 
    });

    scissors.addEventListener('click', function() {
        if (gamesPlayed < 5) {
            console.log('Human choice is: scissors!');
            humanChoice = 3;
            playRound(humanChoice, getComputerChoice());
        } else {
            alert("Game over!");
            decideWinner();
        }
    });
}


// Function plays a single round of a game
function playRound(humanChoice, computerChoice) {
    gamesPlayed += 1;

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === 1) {
        if (computerChoice === 2) {
            console.log("Computer wins! Paper beats rock!");
            computerScore += 1;
        } else {
            console.log("Human wins! Rock beats scissors");
            humanScore += 1;
        }
    } else if (humanChoice === 2) {
        if (computerChoice === 1) {
            console.log("Human wins! Paper beats rock!");
            humanScore += 1;
        } else {
            console.log("Computer wins! Scissors beat paper!");
            computerScore += 1; 
        }
    } else {
        if (computerChoice === 1) {
            console.log("Computer wins! Rock beats scissors!");
            computerScore += 1; 
        } else {
            console.log("Human wins! Scissors beat paper!");
            humanScore += 1; 
        }
    }
    let resultDiv = document.querySelector('.result');
    resultDiv.textContent = `HUMAN: ${humanScore} vs. COMPUTER: ${computerScore}`
}


function decideWinner() {
    if (computerScore > humanScore) {
        alert(`Computer wins with score ${computerScore} : ${humanScore}`);
    } else if (computerScore < humanScore) {
        alert(`Human wins with score ${humanScore} : ${computerScore}`);
    } else {
        alert(`Tie game! Score was ${humanScore} : ${computerScore}`);
    }
}

// Call function - start the game!
getHumanChoice();


// Create game log - for each round played, display who played which hand