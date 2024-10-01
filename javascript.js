let computerScore = 0;
let humanScore = 0;


// Function returns random computer choice for rock/paper/scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    // Return value of a function
    console.log(`Computer choice is: ${computerChoice}`);
    return computerChoice;
}


// Function checks for valid human input and returns human choice
function getHumanChoice() {
    let humanChoice = parseInt(prompt("Rock = 1, Paper = 2, Scissors = 3"));

    // Check for valid input
    if (humanChoice < 1 || humanChoice > 3 || (isNaN(humanChoice))) {
        alert("Wrong input");
        getHumanChoice();
    }

    console.log(`Human choice is: ${humanChoice}`);
    return humanChoice;
}


// Function that plays entire game (5 rounds of playRound function)
function playGame() {

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
    }
    
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
}

// Call play game function to start the game
playGame();

