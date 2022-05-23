const rps_plays = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let scoreDisplay = document.querySelector("#score");

function resetScore(){
    playerScore = 0;
    computerScore = 0;
};

function displayScore(){
    scoreDisplay.textContent = `Score: User: ${playerScore} Computer ${computerScore}`;
}

function computerPlay(){
    const num = Math.floor(Math.random()*3);
    //console.log(`randomizer chose option ${num}: ${rps_plays[num]}`);
    return rps_plays[num];
};

function Rps(playerChoice, computerChoice){

    const pc = playerChoice.toLowerCase();
    const cc = computerChoice.toLowerCase();
    if (pc == cc){
        return "It's a tie!";
    }
    if (pc=='rock'){
        if (cc=='paper'){
            computerScore += 1;
            return 'Paper covers rock. You lose!';
        } else {
            playerScore += 1;
            return 'Rock beats scissors. You win!';
        }
    }
    else if (pc=='paper'){
        if (cc=='scissors'){
            computerScore += 1;
            return 'Scissors cut paper. You lose!';
        } else {
            playerScore += 1;
            return 'Paper covers rock. You win!';
        }
    }
    else { // player choice is scissors
        if (cc=='rock'){
            computerScore += 1;
            return 'Rock beats scissors. You lose!';
        } else {
            playerScore += 1;
            return 'Scissors cuts paper. You win!';
        }
    }
};

let buttons = document.querySelectorAll('button');

function clickChoice() {
    let pc = this.getAttribute("data-play");
    let cc = computerPlay();
    let computerPlayDisplay = document.querySelector('#computer-play');
    computerPlayDisplay.textContent = `The computer chose "${cc}"`;
    
    let result = Rps(pc, cc);
    displayScore();

    let gameResultDisplay = document.querySelector('#game-result');
    gameResultDisplay.textContent = result;


    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            alert("GAME OVER. YOU WIN!");
            resetScore();
            displayScore();
        } else {
            alert("GAME OVER. YOU LOSE!");
            resetScore();
            displayScore();
        }
    };
};

buttons.forEach(button => button.addEventListener('click', clickChoice));


function playerChoice(){
    //console.log(`Options: ${rps_plays}`);
    let pc = prompt("Enter your play:").toLowerCase();
    if (rps_plays.includes(pc)){
        return pc;
    } else {
        alert('You must enter one of: "rock", "paper", "scissors');
        return playerChoice();
    }
};


function Game(){
    console.log("Rock Paper Scissors");
    //for(let i=0; i<=5; i++){
        let pc = playerChoice();
        let cc = computerPlay();
        console.log(`The computer chose "${cc}"`);
        let result = Rps(pc, cc);
        console.log(result);
        console.log("\n\n");
    //}
};