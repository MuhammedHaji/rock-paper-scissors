console.log("hello world");
//getComputerChoice:returns 'rock','paper' or 'scissors' randomly
function getComputerChoice(){
    const n=Math.floor(Math.random()*3);
    if(n===0) return "rock";
    if(n===1) return "paper"
    return "scissors";}
    //test
console.log("computer choice:", getComputerChoice());
//getHumanChoice
function getHumanChoice(){
    let input=prompt("Enter rock,paper or scissors:");
    if(!input) return null;
    return input.toLowerCase();

}
let humaScore=0;
let computerScore=0;
//playRound
function playRound(humanChoice,computerChoice){
    if(!humanChoice){
        console.log("No human choice (cancelled).Round skipped.");
        return;
    }
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log(`It's a tie both chose ${humanChoice}`);
        return;
    }
    const humanWins=(humanChoice==="rock" && computerChoice==="scissors") ||
    (humanChoice==="paper" && computerChoice==="rock") ||
    (humanChoice==="scissors" && computerChoice==="paper");
    if(humanWins){
        humaScore++;
        console.log(`you win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
    } else {
        computerScore++;
        console.log(`you lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
    }
    console.log(`score-> you: ${humaScore}| computer: ${computerScore}`);

}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}