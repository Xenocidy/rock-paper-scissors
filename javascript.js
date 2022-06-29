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

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

/**
 * It takes in the player's and computer's selection and compares them to see who won the round.
 * It keeps track of the score respectively.
 * @param playerSelection - This is the player's choice.
 * @param computerSelection - This is the computer's choice.
 */
function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock') {
        if (playerSelection == 'rock') {
            alert("It's a tie! Both the player and computer selected rock!");
            ties++;
        } else if (playerSelection == 'paper') {
            alert("You won this round! The player selected paper and computer selected rock!");
            playerWins++;
        } else if (playerSelection == 'scissor') {
            alert("You loss this round! The player selected scissor and computer selected rock!");
            cpuWins++;
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'rock') {
            alert("You loss this round! The player selected rock and computer selected paper!");
            cpuWins++;
        } else if (playerSelection == 'paper') {
            alert("It's a tie! Both the player and computer selected paper!");
            ties++;
        } else if (playerSelection == 'scissor') {
            alert("You won this round! The player selected scissor and computer selected paper!");
            playerWins++;
        }
    } else if (computerSelection == 'Scissor') {
        if (playerSelection == 'rock') {
            alert("You won this round! The player selected rock and computer selected scissor!");
            playerWins++;
        } else if (playerSelection == 'paper') {
            alert("You loss this round! The player selected paper and computer selected scissor!");
            cpuWins++;
        } else if (playerSelection == 'scissor') {
            alert("It's a tie! Both the player and computer selected scissor!");
            ties++;
        }
    }
}

/**
 * This function asks the user if they want to play a game of rock paper scissors, if they say yes, it
 * asks them to pick rock paper or scissors, then it plays a round of rock paper scissors with the
 * computer, and asks the user if they want to keep playing.
 */
function playGame() {
    let game = prompt("Would you like to play a game of Rock Paper Scissors?");
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

playGame();