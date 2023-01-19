


function getComputerChoice(){
    let myArray = ["rock","paper" ,"scissor"];
    let RandomIndex = Math.floor(Math.random()*myArray.length) ;
   return myArray[RandomIndex];
}

function game(){
     let userScore = 0;
    let computerScore = 0;
    for(let i=0; i<5 ; i++){
        let user = prompt("Enter Rock, Paper and Choice");
        let computerChoice = getComputerChoice();
        let userChoice = user.toLocaleLowerCase();
        let roundResult = round(userChoice , computerChoice);
        console.log(roundResult);
        if(roundResult==="user Win"){
            userScore++;
        }
       else if(roundResult==="computer Win"){
            computerScore++;
        }
       else if(roundResult==="it is a tie"){
            computerScore++;
            userScore++;
       }
        
    }
    
      if(userScore> computerScore){
        console.log("you win, your score is " + userScore  + " "+ computerScore);  
      }
    
      else if(userScore < computerScore){
        console.log("you Lose, your score is " + computerScore  + " " + userScore );  
      }
      else if(userScore===computerScore){
console.log("Game tie no One is winer");
      }
    
}

function round(userChoice , computerChoice){
    if(userChoice===computerChoice){
        return "it is a tie";
    }
   else if((userChoice==="rock" && computerChoice==="scissor")||
    (userChoice==="paper" && computerChoice==="rock")||
    (userChoice==="scissor" && computerChoice==="paper")){
        return "user Win";
    }
    else if((userChoice==="rock" && computerChoice==="paper")||
    (userChoice==="paper" && computerChoice==="scissor")||
    (userChoice==="scissor" && computerChoice==="rock")){
        return "computer Win";
    }
}

game();
















































// // getComputerChoice function
// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
//   }
  
//   // playRound function
//   function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === computerSelection) {
//       return "It's a tie!";
//     } else if (
//       (playerSelection === "rock" && computerSelection === "scissors") || 
//       (playerSelection === "paper" && computerSelection === "rock") || 
//       (playerSelection === "scissors" && computerSelection === "paper")
//     ) {
//       return "You win! " + playerSelection + " beats " + computerSelection;
//     } else {
//       return "You lose! " + computerSelection + " beats " + playerSelection;                        
//     }  
//   }                                         
  
//   // game function
//   function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//       let playerSelection = prompt("Rock, Paper, Scissors?");
//       let computerSelection = getComputerChoice();
//       let roundResult = playRound(playerSelection, computerSelection);
//       console.log(roundResult);
//       if (roundResult.indexOf("win") !== -1) {
//         playerScore++;
//       } else if (roundResult.indexOf("lose") !== -1) {
//         computerScore++;
//       }
//     }
//     if (playerScore > computerScore) {
//       console.log("You win the game! Final score: " + playerScore + "-" + computerScore);
//     } else if (computerScore > playerScore) {
//       console.log("You lose the game! Final score: " + playerScore + "-" + computerScore);
//     } else {
//       console.log("It's a tie! Final score: " + playerScore + "-" + computerScore);
//     }
//   }
  
//   // call the game function
//   game();
  
































// function getComputerChoice() {
//     var choices = ["Rock", "Paper", "Scissors"];
//     var randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
//   }
  
//   // function to play a single round of Rock Paper Scissors
//   function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toUpperCase();
//     if (playerSelection === computerSelection) {
//       return "Tie! Both chose " + playerSelection;
//     } else if (
//       (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
//       (playerSelection === "PAPER" && computerSelection === "ROCK") ||
//       (playerSelection === "SCISSORS" && computerSelection === "PAPER")
//     ) {
//       return "You Win! " + playerSelection + " beats " + computerSelection;
//     } else {
//       return "You Lose! " + computerSelection + " beats " + playerSelection;
//     }
//   }
  
//   // main game function
//   function game() {
//     let playerWins = 0;
//     let computerWins = 0;
  
//     for (let i = 0; i < 5; i++) {
//       let playerSelection = prompt("Make your choice: Rock, Paper, Scissors").toUpperCase();
//       let computerSelection = getComputerChoice();
//       console.log(playRound(playerSelection, computerSelection));
//       if(playRound(playerSelection, computerSelection) === "You Win! " + playerSelection + " beats " + computerSelection){
//         playerWins++;
//       }else if(playRound(playerSelection, computerSelection) === "You Lose! " + computerSelection + " beats " + playerSelection){
//         computerWins++;
//       }
//     }
  
//     if(playerWins > computerWins){
//       console.log("You Win the game with "+ playerWins + " wins");
//     }else if(playerWins < computerWins){
//       console.log("You Lose the game with "+ computerWins + " wins");
//     }else{
//       console.log("It's a Tie with "+ playerWins + " wins for both");
//     }
//   }
  
//   game();

















































// var userChoice = prompt("Enter Rock, Paper or scissor");
// var computerChoice = getComputerChoice()
// function getComputerChoice(){
//     var choices = ["rock", "paper", "scissor"];
//     var Randomindex = Math.floor(Math.random()*3) ;
//     return choices[Randomindex];
// };
// game(userChoice, computerChoice);

// function output(userChoice , computerChoice) {
//     let userScore=0;
//     let computerScore = 0;
//   if(userChoice == 'rock' && computerChoice== 'paper'){
//     computerScore++;
//   }
//   else if(userChoice == 'rock' && computerChoice== 'scissor'){
//     userScore++;
//   }
//   else if(userChoice == 'rock' && computerChoice== 'rock'){
//     userScore++;
//     computerScore++;
//   }
//   else if(userChoice == 'paper' && computerChoice== 'scissor'){
//     computerScore++;
//   }
//   else if(userChoice == 'paper' && computerChoice== 'rock'){
//     userScore++;
//   }
//   else if(userChoice == 'paper' && computerChoice== 'paper'){
//     computerScore++;
//     userScore++;
//   }
//   else if(userChoice == 'scissor' && computerChoice== 'paper'){

//     userScore++;
//   }
//   else if(userChoice == 'scissor' && computerChoice== 'rock'){

//     userScore++;
//   }
//   else if(userChoice == 'scissor' && computerChoice== 'scissor'){
//     computerScore++;
//     userScore++;
//   }
// return userScore;
  
  
// };


// function game(userChoice, computerChoice){

//     for(let i=0; i<5 ; i++){
//     let num = output(userChoice, computerChoice);
//     console.log(num);    
//     }
    
// }

