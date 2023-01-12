
const computerText = document.querySelector(".computer");
const playerText = document.querySelector(".player");
const resultText = document.querySelector(".result");
let player;
let computer;
let result;

const buttons = document.querySelectorAll(".btns");

buttons.forEach(button => button.addEventListener("click", (e) => {

      player = e.target.innerText.toUpperCase();

      computerTurn()

      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner();
   })
)

function computerTurn() {

   const randomNum = Math.floor(Math.random() * 3) + 1;

   switch (randomNum) {
      case 1:
         computer = "ROCK"
         break
      case 2:
         computer = "SCISSORS"
         break
      case 3:
         computer = "PAPER"
         break
   }

}

function checkWinner() {
    if (computer == player) {
       return "Draw";
    } else if (computer == "ROCK") {
       return (player == "PAPER") ? "You win!" : "You lose!"
    } else if (computer == "PAPER") {
       return (player == "SCISSORS") ? "You win!" : "You lose!"
    } else if (computer == "SCISSORS") {
      return (player == "ROCK") ? "You win!" : "You lose!"
   }
}