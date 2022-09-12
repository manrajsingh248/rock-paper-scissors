// declaring & assigning 4 variables to select the element that matches it's specific CSS selector 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

// declaring variables
let player;
let computer;

// declaring and assigning variables
let playerScore = 0;
let computerScore = 0;


//forEach method function to call player, computer and result for clicking the button
//addEventListener method function to display the text content when button is clicked
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerSelection();
    playerText.textContent = "Player: " + player;
    computerText.textContent = "Computer: " + computer;
    resultText.textContent = "Result: " + result();
}));


// select random number from 1-3
function computerSelection(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "rock";
        break;
      case 2:
        computer = "paper";
        break;
      case 3:
        computer = "scissors";
        break;
    }
}

// disables buttons
function disable() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

  }

//evaluates who won, adds 1 point to the player or computer score if they win. 
function result() {
    if (((player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper") ||
        (player === "rock" && computer === "scissors")) &&
        playerScore + 1 <= 5
    ) {
      
      playerScore += 1;
      resultText.textContent =
        "You win! Player score: " +
        playerScore +
        " Computer score: " +
        computerScore;
  
      if (playerScore == 5) {
        resultText.textContent = "You won the game! Player score: " + playerScore +
          " Computer score: " +
          computerScore + " Reload page to play again!";
        computerScore = 0;
        playerScore = 0;
        disable();
      }
      return resultText.textContent;
    
    } else if (
      ((player === "rock" && computer === "paper") ||
        (player === "paper" && computer === "scissors") ||
        (player === "scissors" && computer === "rock")) &&
      computerScore + 1 <= 5
    ) {
      computerScore += 1;
      resultText.textContent = "You lose! Player score: " + playerScore + 
      " Computer score: " +
        computerScore;
  
      if (computerScore == 5) {
        resultText.textContent = "You lost the game!!!! Player score: " + playerScore +
        " Computer score: " + computerScore + " Reload page to play again!";
        computerScore = 0;
        playerScore = 0;
        disable();
      }
      return resultText.textContent;

    } else {
      resultText.textContent =
        "Draw! Player score: " + playerScore + " Computer score: " + computerScore;
      return resultText.textContent;
    }
}

