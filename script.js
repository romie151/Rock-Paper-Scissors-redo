function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
    console.log(arr[Math.floor(Math.random() * arr.length)]);
};

getComputerChoice()
let player = 0;
let computer = 0;
function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        // return("You win! rock beats paper");
        player++;
        console.log("You win! Rock beats paper");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        // return("You Loose! scissors beats paper");
        computer++;
        console.log("You Loose! Scissors beats paper"); 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        // return("Its a tie");
        console.log("Its a tie");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        // return("Its a tie");
        console.log("Its a tie");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        // return("You win! paper beats rock"); 
        player++;
        console.log("You win! Paper beats rock"); 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        // return("You loose! rock beats scissors");
        computer++;
        console.log("You loose! Rock beats scissors");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        // return("You Loose! paper beats rock");
        computer++;
        console.log("You Loose! Paper beats rock");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        // return("Its a tie"); 
        console.log("Its a tie");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        // return("You win! Scissor beat paper.");
        player++;
        console.log("You win! Scissor beat paper.");

    } else if (playerSelection.toLowerCase() !== ("rock" || "paper" || "scissor")) {
        prompt("That is not a valid entry")
    };
    console.log("Your score = " + player);
    console.log("Computer's score = " + computer);
}

function game(){

    for( let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors");
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))

        console.log(i)
    }
    if (player > computer) {
        console.log("You won the battle");
    } else if ( computer > player) {
        console.log("You lost the battle")
    } else if (player === computer) {
        console.log("Its a Tie!")
    }
}


game()