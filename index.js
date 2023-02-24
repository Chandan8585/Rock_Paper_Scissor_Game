const playerChoiceContainer= document.querySelector(".User");
var buttonShuffleElement = document.querySelector(".computer-output");
var playerChoice = "";
var computerChoice = "";
var buttons = ["👊", "✋", "✌"];
var currentButtonNumber = 0;
var shuffleIntervalID = setInterval(shuffleButtons , 150);

playerChoiceContainer.addEventListener('click', handlePlayerChoice);

function handlePlayerChoice(event){
         if(!event.target.classList.contains("btn")) return;
         playerChoice = event.target.textContent;
         playerChoiceContainer.innerHTML = `<button class="btn"> ${playerChoice}</button>`;
         clearInterval(shuffleIntervalID);
         determineGameWinner();
}

function shuffleButtons(){
    computerChoice = buttons[currentButtonNumber];  
    buttonShuffleElement.textContent = computerChoice;
    if(currentButtonNumber < buttons.length -1 ){
        currentButtonNumber++;
    } else{
        currentButtonNumber = 0;
    }
}


function determineGameWinner(){
    var gameResultMessageElement = document.querySelector("#game-result-message ");
    var gameResultMessage = "";
    if (playerChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
        // Note the extra space in the scissors emoji!
    } else if (playerChoice === "rock" && computerChoice === "scissor") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "scissor" && computerChoice === "paper") {
        gameResultMessage = "Player wins!";
    } else {
        gameResultMessage = "Computer wins!";
    }
    gameResultMessage.textContent = gameResultMessage + "Refresh to play again!";
}





































