const titleText = document.getElementById('title');
const ruleText = document.getElementById('rule');
const playerScore = document.getElementById('playerScore');
const cpuScore = document.getElementById('cpuScore');
const tieScore = document.getElementById('tieScore');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

rockButton.addEventListener('click', () => {
  playRound('rock', computerPlay());
});

paperButton.addEventListener('click', () => {
  playRound('paper', computerPlay());
});

scissorButton.addEventListener('click', () => {
  playRound('scissor', computerPlay());
});

/**
 * It generates a random number between 0 and 2, and then returns the corresponding string value of the
 * number
 * @returns A random value between ‘Rock’, ‘Paper’ or ‘Scissor’.
 */
 function computerPlay() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return 'Rock';
    } else if (random == 1) {
        return 'Paper';
    } else if (random == 2) {
        return 'Scissor';
    }
}

/**
 * It takes in the player's and computer's selection and compares them to see who won the round.
 * It keeps track of the score respectively.
 * @param playerSelection - This is the player's choice.
 * @param computerSelection - This is the computer's choice.
 */
function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock') {
        if (playerSelection == 'rock') {
            titleText.innerHTML = "It's a tie!";
            ruleText.innerHTML = "Rock ties with rock";
            ties++;
        } else if (playerSelection == 'paper') {
            titleText.innerHTML = "You won this round!";
            ruleText.innerHTML = "Paper defeats rock";
            playerWins++;
        } else if (playerSelection == 'scissor') {
            titleText.innerHTML = "You loss this round!";
            ruleText.innerHTML = "Scissor is defeated by rock";
            cpuWins++;
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'rock') {
            titleText.innerHTML = "You loss this round!";
            ruleText.innerHTML = "Rock is defeated by paper";
            cpuWins++;
        } else if (playerSelection == 'paper') {
            titleText.innerHTML = "It's a tie!";
            ruleText.innerHTML = "Paper ties with paper";
            ties++;
        } else if (playerSelection == 'scissor') {
            titleText.innerHTML = "You won this round!";
            ruleText.innerHTML = "Scissor defeats paper";
            playerWins++;
        }
    } else if (computerSelection == 'Scissor') {
        if (playerSelection == 'rock') {
            titleText.innerHTML = "You won this round!";
            ruleText.innerHTML = "Rock defeats scissor";
            playerWins++;
        } else if (playerSelection == 'paper') {
            titleText.innerHTML = "You loss this round!";
            ruleText.innerHTML = "Paper is defeated by scissor";
            cpuWins++;
        } else if (playerSelection == 'scissor') {
            titleText.innerHTML = "It's a tie!";
            ruleText.innerHTML = "Scissor ties with scissor";
            ties++;
        }
    }

    playerScore.innerHTML = playerWins;
    cpuScore.innerHTML = cpuWins;
    tieScore.innerHTML = ties;
}

/**
 * This function asks the user if they want to play a game of rock paper scissors, if they say yes, it
 * asks them to pick rock paper or scissors, then it plays a round of rock paper scissors with the
 * computer, and asks the user if they want to keep playing.
 */
function playGame() {
    //let game = prompt("Would you like to play a game of Rock Paper Scissors?");
    game = game.toLowerCase();
    if (game == 'yes') {
        playerWins = 0;
        cpuWins = 0;
        ties = 0;

        let selection = prompt("Which one are you picking? Rock Paper or Scissor?");
        selection = selection.toLowerCase();
        if (selection == 'rock' || selection == 'paper' || selection == 'scissor') {
            playRound(selection, computerPlay());
        } else {
            alert("I dont recognize that selection. I'm not playing anymore.");
            return;
        }

        let again = prompt("Do you want to keep playing?");
        again = again.toLowerCase();

        while (again == 'yes') {
            selection = prompt("Which one are you picking? Rock Paper or Scissor?");
            selection = selection.toLowerCase();
            playRound(selection, computerPlay());

            again = prompt("Do you want to keep playing?");
            again = again.toLowerCase();
        }
        
        alert("Well, that was it! I had fun playing! Hope you did too!");

    } else if (game == 'no') {
        alert("That's alright, have a good day!");
    } else {
        alert("Answer not recognized, refresh the page to try again.")
    }
}