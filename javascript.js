function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(randomNumber);

    // Output Rock/Paper/Scissors based on random number
    if (randomNumber === 1) {
        console.log("Rock");
    }
    else if (randomNumber === 2) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }
}


function getHumanChoice() {
    // Get input from the user
    let humanChoice = parseInt(prompt("Rock = 1, Paper = 2, Scissors = 3"));

    console.log(humanChoice);
    // Check for valid input
    // Check if user input is a number between 1 and 3 - else call getHumanChoice function again
    if (humanChoice < 1 || humanChoice > 3 || (isNaN(humanChoice))) {
        alert("Wrong input");
        getHumanChoice();
    }
}




getHumanChoice();


// Rock beats scissors
// Paper beats rock
// Scissors beat paper