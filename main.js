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

function getHumanChoice(prompt){
    let choice = window.prompt("Choose Rock, Paper or Scissors");

    
    choice = choice.toLocaleLowerCase();

    if(choice !== "rock" && choice !== "scissors" && choice !== "paper"){
        getHumanChoice();
    }

    console.log("Human chose: " + choice);

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if(humanChoice == computerChoice){
        console.log("Draw");
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

    if(humanScore < 5 && computerScore < 5){
        playRound();
    } else {
        if(humanScore > computerScore){
            console.log("Player wins the game");
        } else {
            console.log("Computer wins the game");
        }
    }
}

function computerWin(){
    computerScore++;
    console.log("Computer wins");
}

function playerWin(){
    humanScore++;
    console.log("Player wins");
}



playRound();