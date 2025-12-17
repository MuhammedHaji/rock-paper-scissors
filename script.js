let humanScore=0;
let computerScore=0;

const messageDiv=document.getElementById("message");
const scoreDiv=document.getElementById("score");

function getComputerChoice(){
  const random=Math.random();
  if(random<0.33) return "rock";
  if(random<0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice){
  if(humanScore===5 ||computerScore===5) return;
  const computerChoice=getComputerChoice();
  if(humanChoice===computerChoice){
    messageDiv.textContent=`Tie Both chose ${humanChoice}`;
  }
  else if(
    (humanChoice==="rock" && computerChoice==="scissors") ||
    (humanChoice==="paper" && computerChoice==="rock") ||
    (humanChoice==="scissors" && computerChoice==="paper") 
  ) {
    humanScore++;
    messageDiv.textContent=`You win! ${humanChoice} beats ${computerChoice}`;

  }
  else {
    computerScore++;
    messageDiv.textContent=`You lose! ${computerChoice}  beats ${humanChoice}`;  
  }
  scoreDiv.textContent=`Score - You: ${humanScore} | Computer: ${computerScore}`;
  if(humanScore===5){
    messageDiv.textContent= "🎉 You won the game!";
  }
  else if(computerScore===5){
    messageDiv.textContent= "💻 Computer won the game!";
  }
}
document.getElementById("rock").addEventListener("click",()=>{
  playRound("rock");
});

document.getElementById("paper").addEventListener("click",()=>{
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click",()=>{
  playRound("scissors");
});


// function getComputerChoice() {
//   const randomNumber = Math.random();

//   if (randomNumber < 0.33) {
//     return "rock";
//   } else if (randomNumber < 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// function getHumanChoice() {
//   return prompt("Enter rock, paper, or scissors:");
// }

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice === computerChoice) {
//       console.log("It's a tie!");
//       return;
//     }

//     if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//       humanScore++;
//       console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//     } else {
//       computerScore++;
//       console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//     }
//   }

//   for (let i = 1; i <= 5; i++) {
//     console.log(`--- Round ${i} ---`);
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//   }

//   console.log("Final Score:");
//   console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("🎉 You won the game!");
//   } else if (computerScore > humanScore) {
//     console.log("💻 Computer won the game!");
//   } else {
//     console.log("🤝 The game is a tie!");
//   }
// }

// // Start the game
// playGame();
