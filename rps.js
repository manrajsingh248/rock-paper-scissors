const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;

let playerScore = 0;
let computerScore = 0;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerSelection();
    playerText.textContent = "Player: " + player;
    computerText.textContent = "Computer: " + computer;
    resultText.textContent = "Result: " + result();
}));

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


function result() {

    
  


    if ((player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper") || 
        (player === "rock" && computer === "scissors") && 
        
        (playerScore <=5 || computerScore <=5))

        {
       
        playerScore += 1;
        return ("You win! " + "Player score: " + playerScore + " Computer score: " + computerScore);
    }
    
    if (playerScore == 5) {
        return ("Winner winner chicken dinner! You won the game! " + " Player score: " + playerScore + "Computer score: " + computerScore);
        
    }
    
   
    
    else if 
        ((player === "rock" && computer === "paper") || 
        (player === "paper" && computer === "scissors") || 
        (player === "scissors" && computer === "rock") &&
         (playerScore <=5 || computerScore <=5))
        
        
        {
        
        
        computerScore += 1;
        return("You lose! " + "Player score: " + playerScore + " Computer score: " + computerScore); 
        }
    
    if (computerScore == 5) {
        return ("You lost the game. " + "Player score: " + playerScore + " Computer score: " + computerScore);
        }

    else if
    (player == computer) {
        return ("Draw! " + "Player score: " + playerScore + " Computer score: " + computerScore);
    } 


}  
      
    

    
          
    



   
   
   
   
    

