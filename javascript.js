const titleText = document.getElementById('title');
const ruleText = document.getElementById('rule');
const playerScore = document.getElementById('playerScore');
const cpuScore = document.getElementById('cpuScore');
const tieScore = document.getElementById('tieScore');
const playerIcon = document.getElementById('player');
const cpuIcon = document.getElementById('cpu');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

rockButton.addEventListener('click', () => {
    playerIcon.style.backgroundImage = "url(rock.png)";
    playRound('rock', computerPlay());
});

paperButton.addEventListener('click', () => {
    playerIcon.style.backgroundImage = "url(paper.png)";
    playRound('paper', computerPlay());
});

scissorButton.addEventListener('click', () => {
    playerIcon.style.backgroundImage = "url(scissor.png)";
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

        cpuIcon.style.backgroundImage = "url(rock.png)";

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

        cpuIcon.style.backgroundImage = "url(paper.png)";

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

        cpuIcon.style.backgroundImage = "url(scissor.png)";

    }

    playerScore.innerHTML = playerWins;
    cpuScore.innerHTML = cpuWins;
    tieScore.innerHTML = ties;
}