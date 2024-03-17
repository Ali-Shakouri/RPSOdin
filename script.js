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
    console.log("Player chose:", playerSelection);
    console.log("Computer chose:", computerSelection);

    if (playerSelection === "stone") {
        console.log("Player is silly!");
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("Player wins!");
        return 'player';
    } else {
        console.log("Computer wins!");
        return 'computer';
    }
}

function playGame() {
    // Define variables to keep track of scores and rounds played
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        // Prompt player for choice
        let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
        
        // Generate computer's choice
        let computerSelection = getComputerChoice();

        // Call playRound function and update scores based on the result
        let winner = playRound(playerSelection, computerSelection);

        // Update scores based on the result of each round
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
    }

    // After the loop completes, determine the winner and display the final scores
    console.log("Final scores:");
    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Call the playGame function to start the game
playGame();