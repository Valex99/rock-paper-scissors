let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

/*    
    // Output Rock/Paper/Scissors based on random number
    if (computerChoice === 1) {
        //console.log("Rock");
    }
    else if (computerChoice === 2) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }
*/
    // Return value of a function
    console.log(`Computer choice is: ${computerChoice}`);
    return computerChoice;
}


function getHumanChoice() {
    // Get input from the user and turn it into integer
    let humanChoice = parseInt(prompt("Rock = 1, Paper = 2, Scissors = 3"));

    // Check for valid input
    // Check if user input is a number between 1 and 3 - else call getHumanChoice function again
    if (humanChoice < 1 || humanChoice > 3 || (isNaN(humanChoice))) {
        alert("Wrong input");
        getHumanChoice();
    }


    console.log(`Human choice is: ${humanChoice}`);
    console.log(typeof humanChoice)
    return humanChoice;
}

// Both functions above work
// They both return int value



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Tie!");
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        alert("Computer wins! Paper beats rock!");
        computerScore += 1;
    }
    else if (humanChoice === 1 && computerChoice === 3) {
        alert("Human wins! Rock beats scissors");
        humanScore += 1;
    }
    else if (humanChoice === 2 && computerChoice === 1) {
        alert("Human wins! Paper beats rock!");
        humanScore += 1;
    }
    else if (humanChoice === 2 && computerChoice === 3) {
        alert("Computer wins! Scissors beat paper!");
        computerScore += 1;

    }
    else if (humanChoice === 3 && computerChoice === 1) {
        alert("Computer wins! Rock beats scissors!");
        computerScore += 1;

    }
    else {
        alert("Human wins! Scissors beat paper!")
        humanScore += 1;
    }

console.log(`Human has ${humanScore} point, compuer has ${computerScore} points`);
}

// Define two new variables (cons) and save result of human and computer choices in them
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Call playRound function and pass those two variables as arguments
playRound(humanSelection, computerSelection);



