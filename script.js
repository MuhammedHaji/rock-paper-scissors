console.log("hello world");
//getComputerChoice:returns 'rock','paper' or 'scissors' randomly
function getComputerChoice(){
    const n=Math.floor(Math.random()*3);
    if(n===0) return "rock";
    if(n===1) return "paper"
    return "scissors";}
    //test
console.log("computer choice:", getComputerChoice());
