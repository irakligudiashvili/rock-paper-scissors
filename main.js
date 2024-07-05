function getComputerChoice(){
    let roll = Math.ceil(Math.random() * 3);

    switch(roll){
        case 1:
            console.log("Computer chose: Rock");
            return "rock";
        case 2:
            console.log("Computer chose: Paper");
            return "paper";
        case 3:
            console.log("Computer chose: Scissors");
            return "scissors";
    }

    console.log("Error; roll: " + roll);
}

let humanScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const gameOver = document.getElementById("gameOver");
let canPlay = true;

function playRound(playerChoice){
    if(!canPlay) {
        return;
    }
    const humanChoice = playerChoice;
    const computerChoice = getComputerChoice();

    if(humanChoice == computerChoice){
        result.innerHTML = "Draw";
    } else if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            computerWin();
        } else {
            playerWin();
        }
    } else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            computerWin();
        } else {
            playerWin();
        }
    } else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            computerWin();
        } else {
            playerWin();
        }
    }

    console.log("Player: " + humanScore + " Computer: " + computerScore);

    if(humanScore >= 5 || computerScore >= 5){
        if(humanScore > computerScore){
            gameOver.innerHTML = "Game Over! Player wins";
            canPlay = false;
        } else {
            gameOver.innerHTML = "Game Over! Computer wins";
            canPlay = false;
        }
    }

    const playerScoreP = document.getElementById("playerScore");
    const computerScoreP = document.getElementById("computerScore");
    



    playerScoreP.innerHTML = humanScore;
    computerScoreP.innerHTML = computerScore;
}

function computerWin(){
    computerScore++;
    console.log("Computer wins");
    result.innerHTML = "Computer wins";
}

function playerWin(){
    humanScore++;
    console.log("Player wins");
    result.innerHTML = "Player wins";
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    playRound("rock");
})

paper.addEventListener("click", () => {
    playRound("paper");
})

scissors.addEventListener("click", () => {
    playRound("scissors");
})