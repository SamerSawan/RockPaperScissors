function computerPlay(){
    var play = ["rock", "paper", "scissors"]
    const played = play[Math.floor(Math.random() * play.length)];
    return played;
}
let i = 0;
let j = 0;
function playRound(playerSelection, computerSelection){
    const results = document.querySelector(".results");
    const score = document.querySelector(".score");
    const computer = document.querySelector(".computer");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            results.textContent = "Draw! No one wins!";
        } else if (computerSelection == "paper"){
            results.textContent = "You Lose! Paper beats Rock!";
            j++;
            computer.textContent = `Computer Score: ${j}`;
        } else if (computerSelection == "scissors"){
            results.textContent = "You Win! Rock beats Scissors!";
            i++;
            score.textContent = `Your Score: ${i}`;
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "paper"){
            results.textContent = "Draw! No one wins!";
        } else if (computerSelection == "rock"){
            results.textContent = "You Win! Paper beats Rock!";
            i++;
            score.textContent = `Your Score: ${i}`;
        } else if (computerSelection == "scissors"){
            results.textContent = "You Lose! Scissors beats Paper";
            j++;
            computer.textContent = `Computer Score: ${j}`;
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "scissors"){
            results.textContent = "Draw! No one wins!";
        } else if (computerSelection == "rock"){
            results.textContent = "You Lose! Rock beats Scissors!";
            j++;
            computer.textContent = `Computer Score: ${j}`;
        } else if (computerSelection == "paper"){
            results.textContent = "You Win! Scissors beats Paper!";
            i++;
            score.textContent = `Your Score: ${i}`;
        }
    }

    if (i >= 5){
        results.textContent = "You Win!";
        i = 0;
        j = 0;
        score.textContent = `Your Score: ${i}`;
        computer.textContent = `Computer Score: ${j}`;
    } else if (j >= 5){
        computer.textContent = "You Lose!";
        i = 0;
        j = 0;
        score.textContent = `Your Score: ${i}`;
        computer.textContent = `Computer Score: ${j}`;
    }
}
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
rockButton.addEventListener("click", () => console.log(playRound("rock", computerPlay())));
paperButton.addEventListener("click", () => console.log(playRound("paper", computerPlay())));    
scissorsButton.addEventListener("click", () => console.log(playRound("scissors", computerPlay())));