// COPY OF LATEST VERSION IN SANDBOX
let computerScore = 0;
let humanScore = 0;


// Function returns random computer choice for rock/paper/scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        console.log("Computer choice is rock");
    }
    else if (computerChoice === 2) {
        console.log("Computer choice is paper")    
    }
    else {
        console.log("Computer choice is scissors") 
    }

    return computerChoice;
}


// Get human choice with buttons
function getHumanChoice() {
    let humanChoice = 0;

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', function() {
        console.log('Human choice is: rock!'); 
        humanChoice = 1;
        playRound(humanChoice, getComputerChoice());
    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', function() {
        console.log('Human choice is: paper!');
        humanChoice = 2;
        playRound(humanChoice, getComputerChoice());
    });

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function() {
        console.log('Human choice is: scissors!');
        humanChoice = 3;
        playRound(humanChoice, getComputerChoice());

        // Try to return value at the bottom so you only have to do it once
    });
};

// Function plays a single round of a game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else if (humanChoice === 1) {
        if (computerChoice === 2) {
            console.log("Computer wins! Paper beats rock!");
            computerScore += 1;
        }
        else {
            console.log("Human wins! Rock beats scissors");
            humanScore += 1;
        }
    }
    else if (humanChoice === 2) {
        if (computerChoice === 1) {
            console.log("Human wins! Paper beats rock!");
            humanScore += 1;
        }
        else {
            console.log("Computer wins! Scissors beat paper!");
            computerScore += 1; 
        }
    }
    else {
        if (computerChoice === 1) {
            console.log("Computer wins! Rock beats scissors!");
            computerScore += 1; 
        }
        else {
            console.log("Human wins! Scissors beat paper!");
            humanScore += 1; 
        }
    }
console.log(`Human score is: ${humanScore} vs. compuer score: ${computerScore}`)
}

getHumanChoice();














// Removed
// Function that plays entire game (5 rounds of playRound function)

// function playGame() {




    // Temporarily removed logic that plays exactly 5 rounds
/*
    // For loop that calls the playRound function 5 times
    for (let i = 0; i < 5; i++) {
        
        // Define two new variables (const) and save result of human and computer choices in them
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // Call playRound function and pass those two variables as arguments
        playRound(humanSelection, computerSelection);
    }


    // Determine who the winner is
    if (computerScore > humanScore) {
        console.log(`Computer wins with score ${computerScore} : ${humanScore}`);
    }
    else if (computerScore < humanScore) {
        console.log(`Human wins with score ${humanScore} : ${computerScore}`);
    }
    else {
        console.log(`Tie game! Score was ${humanScore} : ${computerScore}`);
    }
    alert("GAME OVER");
*/
