let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const roundCounter = document.querySelector('#roundCounter');
const resultElement = document.querySelector('#result');
const winnerElement = document.querySelector('#winner');

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const restartButton=document.querySelector('.restartButton');
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;

    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    roundCounter.textContent = `Round ${roundsPlayed + 1} of ${maxRounds}`;

    let resultMessage = "";

    if (playerSelection === computerSelection) {
        resultMessage = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultMessage = "Player wins!";
        playerScore++;
    } else {
        resultMessage = "Computer wins!";
        computerScore++;
    }

    resultElement.textContent = resultMessage;

    roundsPlayed++;
    if (roundsPlayed === maxRounds) {
        announceWinner();
        restartGame();
       
    }
}

function announceWinner() {
    let winnerMessage = "";

    if (playerScore > computerScore) {
        winnerMessage = "Player wins the game!";
    } else if (playerScore < computerScore) {
        winnerMessage = "Computer wins the game!";
    } else {
        winnerMessage = "This game is a tie!";
    }

    winnerElement.textContent = winnerMessage;
    restartGame();
}

rockButton.addEventListener('click', () => {
    if (roundsPlayed < maxRounds) {
        playRound("rock", getComputerChoice());
    }
});

paperButton.addEventListener('click', () => {
    if (roundsPlayed < maxRounds) {
        playRound("paper", getComputerChoice());
    }
});

scissorsButton.addEventListener('click', () => {
    if (roundsPlayed < maxRounds) {
        playRound("scissors", getComputerChoice());
    }
});
function restartGame(){
  restartButton.addEventListener('click',()=>{
    playerScore = 0;
 computerScore = 0;
 roundsPlayed = 0;
 document.querySelector("#winner").innerHTML='';
 document.querySelector("#result").innerHTML='';
 roundCounter.textContent = `Round ${roundsPlayed} of ${maxRounds}`;
 
  })
}