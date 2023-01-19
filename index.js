


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
















































