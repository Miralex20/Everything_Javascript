// ROCK PAPER SCISSORS
const choices = ['rock', 'paper', 'scissor']
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");



function playGame(playerChoice){
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (computerChoice === playerChoice){
        result = "Tie Game";
    }
    else{
    switch (playerChoice){
        case "rock":
            result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "scissor":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
        break;
    }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMP: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("win", "lose");

    switch (result){
        case "YOU WIN!":
            resultDisplay.classList.add("win");
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("lose");
            break;
    }


}