////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move= getInput();
    if (move === "rock" || move === "paper" || move ==="scissors"){
        console.log("You chose " + move + ".");
        return move;
    } else{
        console.log("That's not a thing!")
        return getPlayerMove();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    console.log("The computer chose " + move);
    return move;
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
var winner;
var pMove= getPlayerMove();
var cMove= getComputerMove();
      if ( pMove === cMove){
        winner= "tie";
        console.log("It was a tie.")
        return winner;
    } else if ( (pMove === "rock" && cMove === "paper") || (pMove === "paper" && cMove === "scissors" ) || (pMove === "scissors" && cMove ==="rock")) {
        winner="computer";
        console.log("The winner is " + winner);
        return winner; 
    } else {
        winner="player";
        console.log("The winner is " + winner)
        return winner;
        }
    }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
    while((playerWins < 5) && (computerWins < 5)){
        var whoWon = getWinner();
        if (whoWon ==="computer"){
            computerWins++;
            console.log(" The score is Player: " + playerWins + ", Computer: " + computerWins);
            /*return [playerWins, computerWins]; */
        } else if (whoWon === "player") {
            playerWins++;
            console.log(" The score is Player: " + playerWins + ", Computer: " + computerWins);
        } else {
            console.log("Tie!");
            console.log(" The score is Player: " + playerWins + ", Computer: " + computerWins);
        }
        }
}
playToFive();
