
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);

    return choices[computerChoice];
}

function getHumanChoice(choice) {

    switch (choice.toLowerCase()) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return choice.toLocaleLowerCase();
        default:
            return null;
    };
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
           console.log('Draw!')
    }
    else if ((humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'rock' && computerChoice === 'scissors')) {
        
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    } 
}

function playGame() {
    btns = document.querySelectorAll('button');

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let humanChoice = btn.innerText.toLocaleLowerCase();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}

playGame();


