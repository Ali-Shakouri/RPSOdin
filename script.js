function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;

    if (randomNumber === 0) {
        choice = "Rock";
    } else if (randomNumber === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);