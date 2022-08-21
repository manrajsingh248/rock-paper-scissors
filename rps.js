
let playerSelection = prompt('Select rock, paper or scissors');

const myArray = ["rock", "paper", "scissors"];

function random(myArray){
    return myArray [Math.floor(Math.random()*myArray.length)];
}

console.log("The computer chose " + random(myArray));








function round(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
     if (computerSelection == "scissors") {
        console.log("You lose! Paper beats rock")
        }

    }
   
    else if (
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "rock" && computerSelection == "scissor") )
            {
                
        return console.log("You win! Paper beats rock")
        
        }

    else if (
            (playerSelection == "scissor" && computerSelection == "rock") ||
            (playerSelection == "scissor" && computerSelection == "paper") ||
            (playerSelection == "rock" && computerSelection == "paper") 
    )
    {
        console.log("You lose :(")
        }
}

round();