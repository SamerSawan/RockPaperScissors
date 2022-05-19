function computerPlay(){
    var play = ["rock", "paper", "scissors"]
    const played = play[Math.floor(Math.random() * play.length)];
    return played;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return "Draw! No one wins!";
        } else if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors!";
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "paper"){
            return "Draw! No one wins!";
        } else if (computerSelection == "rock"){
            return "You Win! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper!";
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "scissors"){
            return "Draw! No one wins!";
        } else if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper!";
        }
    }
    return "error"
}

function game(){
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Choose your option: ", "rock");
        console.log(playRound(playerSelection, computerPlay()));
    }
}