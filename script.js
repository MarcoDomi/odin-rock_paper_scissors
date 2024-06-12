
let humanScore = 0;
let computerScore = 0;

let humanScoreSpan = document.querySelector('#humanScore');
let computerScoreSpan = document.querySelector('#computerScore');
let resultMsg = document.querySelector('#gameResult');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);

    return choices[computerChoice];
}

function updatePageScore(span, newScore) {
    let spanMessage = span.innerText;
    span.innerText = spanMessage.slice(0, -1) + newScore;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMsg.innerText = 'Draw!'
    }
    else if ((humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'rock' && computerChoice === 'scissors')) {
        
        humanScore++;
        updatePageScore(humanScoreSpan, humanScore);
        resultMsg.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        updatePageScore(computerScoreSpan, computerScore);
        resultMsg.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    } 
}

function checkWinner() {

    if (humanScore === 5) {
        resultMsg.innerText = 'Player wins the game!';
    }
    else if (computerScore === 5) {
        resultMsg.innerText = 'Computer wins the game!';
    }

    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        updatePageScore(humanScoreSpan, humanScore);
        updatePageScore(computerScoreSpan, computerScore);
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


