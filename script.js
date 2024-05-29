
//let humanScore = 0;
//let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);

    return choices[computerChoice];
}

function getHumanChoice() {
    const choice = prompt('Enter rock, paper or scissors: ');

    switch (choice.toLowerCase()) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return choice.toLocaleLowerCase();
        default:
            return null;
    };
}

/*
function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === computerChoice) {
            console.log('Draw!')
    }
    else if((humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'rock' && computerChoice === 'scissors')){
            
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`); 
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}
*/


function playGame() {
    const NUMBER_OF_ROUNDS = 5;
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
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
    };

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
    }

}

playGame();


