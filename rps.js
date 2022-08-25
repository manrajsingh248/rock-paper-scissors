const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerSelection();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = result();
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
function result(){
    if(player == computer){
      return "Draw!";
    }
    else if ((player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper") ||
            (player === "rock" && computer === "scissors") ) {  
        return ("You win! ");
    }
    else {
        return ("You lose :(");   
}
}



/*
if (player === computer) {
    return ("It's a draw!");
}

else if (
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper") ||
    (player === "rock" && computer === "scissors") ) {
         
   // playerScore += 1;//
        return ("You win! " + player + " beats " + computer);
        }

 else {
    return ("You lose :(");
            } */