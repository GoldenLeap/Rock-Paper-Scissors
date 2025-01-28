var computerChoice = '';
var userChoice = '';
var computerScore = 0;
var userScore = 0;

// Gets user choice
function getUserChoice(){
    var choice= prompt("Rock, paper or scissors: ")
    // Keep asking until user provides a valid input
    while(true){
        if(choice.toLowerCase() !== "rock" && choice.toLowerCase() !== 'paper' && choice.toLowerCase() !== 'scissors'){
            choice = prompt("Invalid input. Please choose between rock, paper, or scissors.")
        }
        else{
            return choice.toLowerCase();
        }
    }
}

// Gets computer choice
function getComputerChoice(){
    // Generate a random number between 1 and 3
    let choiceNum = Math.ceil(Math.random() * 3);
    // Based on the number, return a choice between rock(1), paper(1) or scissors(1)
    switch (choiceNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            alert('Something went wrong, sorry');
    }
}

// Round function
function playRound(userChoice, computerChoice){
     // Check if it's a tie and inform the user
    if(userChoice === computerChoice){
        alert(`I chose ${computerChoice} and you ${userChoice} looks like it's a tie.`);
    }
    // Check if the user wins and increment the user score
    else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper') || 
        (userChoice === 'paper' && computerChoice === 'rock'))
        {
        alert(`You chose ${userChoice}, I chose ${computerChoice}. You win! congratulations!`);
        userScore += 1;
    }
    // If it's not a tie or a win, the computer wins, so increment the computer score
    else{ 
        alert(`you chose ${userChoice}, I chose ${computerChoice}. I win! Better luck next time!`)
        computerScore += 1;
    }
}
// Function to start the game with 5 rounds
function PlayGame(){
    userScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        // Get the user's and computer's choice
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        // Play a round with the selected choices
        playRound(userChoice, computerChoice);
    }

    if(computerScore === userScore){
        // Tie
        alert(`Final Score:\n user: ${userScore}\tComputer: ${computerScore}\nIt's a tie!`)
    }
    else if(computerScore > userScore){
        // Computer wins
        alert(`Final Score:\n user: ${userScore}\tComputer: ${computerScore}\nI win! Better luck next time!`)
    }
    else{
        // User wins
        alert(`Final Score:\n user: ${userScore}\tComputer: ${computerScore}\nYou win! Congratulations!`)

    }
    // Ask if the user wants to play again
    if(confirm("Do you want to play again?")){
        PlayGame();
    }
}
// Start the game and display the final result.
PlayGame();