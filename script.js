
let humanScore = 0;
let computerScore = 0;

let humanScoreSpan = document.querySelector('#humanScore');
let computerScoreSpan = document.querySelector('#computerScore');
let gameInfo = document.querySelector('#gameInfo');
let gameResult = document.querySelector('#gameResult');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);

    return choices[computerChoice];
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameInfo.innerText = 'Draw!'
    }
    else if ((humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'rock' && computerChoice === 'scissors')) {
        
        humanScore++;
        humanScoreSpan.innerText = humanScore;
        gameInfo.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        computerScoreSpan.innerText = computerScore;
        gameInfo.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    } 
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.innerText = '0';
    computerScoreSpan.innerText = '0';
    gameInfo.innerText = 'Info will be displayed here.';
    //gameResult.innerText = '';
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            gameResult.innerText = 'Player wins the game!';
        }
        else if (computerScore === 5) {
            gameResult.innerText = 'Computer wins the game!';
        }
        //add reset button here
        resetGame();
    }
}

function playGame() {
    btns = document.querySelectorAll('button');

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let humanChoice = btn.innerText.toLocaleLowerCase();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            checkWinner();

        });
    });
}

playGame();


