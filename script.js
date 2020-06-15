function computerPlay(){
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1){
        return "rock";
    }else if(rand === 2){
        return "paper";
    }else{
        return "scissor";
    }
}



// let playerSelection = prompt("Please choose from Rock,Paper,Scissor");
// playerSelection = playerSelection.toLowerCase();

// let computerSelection = computerPlay();

function playRound(playerSelection,computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return "Game tie";
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "Computer Wins";
    }else if(playerSelection == 'rock' && computerSelection == 'scissor'){
        return "You Win";
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return "You Win";
    }else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return "Game tie";
    }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        return "Computer Wins";
    }else if(playerSelection == 'scissor' && computerSelection == 'scissor'){
        return "Game tie";
    }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
        return "You Win";
    }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        return "Computer Wins";
    }
}

function game(){
    let computerWins = 0;
    let playerWins = 0;
    let Draws = 0;
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Please choose from Rock,Paper,Scissor");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        let results = playRound(playerSelection,computerSelection);
        if(results == "You Win"){
            playerWins += 1;
        }else if(results == "Computer Wins"){
            computerWins += 1;
        }else{
            Draws += 1;
        }
    }
    if(playerWins > computerWins){
        console.log("Player Wins Score: " + playerWins + "Your Score is:" + computerWins + "Draws: " + Draws);
    }else{
        console.log("Computer Wins Score:",computerWins + "Your Score is : " + playerWins + "Draws: " + Draws);
    }
}

game();