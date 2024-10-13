let humanChoice = 0;
let computerChoice = 0;

let humanScore = 0;
let computerScore = 0;

const startButon = document.querySelector(".start-button");
const score = document.querySelector(".score");
const mainContainer = document.querySelector(".main-container");
const buttonsDiv = document.querySelector(".buttons");

// Display score when the game starts
startButon.addEventListener("click", function () {
  score.textContent = "PLAYER: 0 | COMPUTER: 0";

  startButon.remove();

  // CREATE 3 NEW BUTTONS (RPS)
  const rock = document.createElement("button");
  rock.classList.add("rock-button");
  rock.textContent = "ROCK";
  buttonsDiv.appendChild(rock);
  rock.addEventListener("click", function () {
    humanChoice = "ROCK";
    console.log(humanChoice);
    // CALL PLAY ROUND FUNCTION
    playRound(humanChoice, getComputerChoice());
  });

  const paper = document.createElement("button");
  paper.classList.add("paper-button");
  paper.textContent = "PAPER";
  buttonsDiv.appendChild(paper);
  paper.addEventListener("click", function () {
    humanChoice = "PAPER";
    console.log(humanChoice);
    playRound(humanChoice, getComputerChoice());
  });

  const scissors = document.createElement("button");
  scissors.classList.add("scissors-button");
  scissors.textContent = "SCISSORS";
  buttonsDiv.appendChild(scissors);
  scissors.addEventListener("click", function () {
    humanChoice = "SCISSORS";
    console.log(humanChoice);
    playRound(humanChoice, getComputerChoice());
  });
});

// Function returns random computer choice for rock/paper/scissors
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "ROCK";
  } else if (computerChoice === 2) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  console.log(`COMPUTER: ${computerChoice}`);
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    const tie = document.createElement("div");
    tie.classList.add("game-log");
    tie.innerHTML = `No winner...<br>${humanChoice} (Human) is equal to ${computerChoice} (Computer)`;
    mainContainer.appendChild(tie);
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    score.textContent = `PLAYER: ${humanScore} | COMPUTER: ${computerScore}`;
    // HERE I NEED TO KEEP LOG OF THE GAME AND INCREASE SCORE
    const humanWin = document.createElement("div");
    humanWin.classList.add("game-log");
    humanWin.innerHTML = `Human wins!<br>${humanChoice} (Human) BEATS ${computerChoice} (Computer)`;
    mainContainer.appendChild(humanWin);
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    computerScore++;
    score.textContent = `PLAYER: ${humanScore} | COMPUTER: ${computerScore}`;
    const computerWin = document.createElement("div");
    computerWin.classList.add("game-log");
    computerWin.innerHTML = `Computer wins!<br>${computerChoice} (Computer) BEATS ${humanChoice} (Human)`;
    mainContainer.appendChild(computerWin);
  }
}
