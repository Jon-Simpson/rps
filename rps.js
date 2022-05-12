const rps_plays = ['rock', 'paper', 'scissors'];

Game();

function computerPlay(){
    const num = Math.floor(Math.random()*3);
    //console.log(`randomizer chose option ${num}: ${rps_plays[num]}`);
    return rps_plays[num];
}

function playerChoice(){
    //console.log(`Options: ${rps_plays}`);
    let pc = prompt("Enter your play:").toLowerCase();
    if (rps_plays.includes(pc)){
        return pc;
    } else {
        alert('You must enter one of: "rock", "paper", "scissors');
        return playerChoice();
    }
}

function Rps(playerInput, computerChoice){
    const pc = playerInput.toLowerCase();
    const cc = computerChoice.toLowerCase();
    if (pc == cc){
        return "It's a tie!"
    }
    if (pc=='rock'){
        if (cc=='paper'){
            return 'Paper covers rock. You lose!'
        } else {
            return 'Rock beats scissors. You win!'
        }
    }
    else if (pc=='paper'){
        if (cc=='scissors'){
            return 'Scissors cut paper. You lose!'
        } else {
            return 'Paper covers rock. You win!'
        }
    }
    else {
        if (cc=='rock'){
            return 'Rock beats scissors. You lose!'
        } else {
            return 'Scissors cuts paper. You win!'
        }
    }
}

function Game(){
    console.log("Rock Paper Scissors");
    for(let i=0; i<=5; i++){
        let pc = playerChoice();
        let cc = computerPlay();
        console.log(`The computer chose "${cc}"`)
        let result = Rps(pc, cc);
        console.log(result);
        console.log("\n\n")
    }
}