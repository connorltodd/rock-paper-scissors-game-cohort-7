// PseudoCode
// 3 possibilities to win
// scissors beats paper - objects
// paper beats rock - objects
// rock beats scissors - objects
const selection = [
    {
        name: 'scissors',
        beats: 'paper'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'rock',
        beats: 'scissors'
    }
]
// when the user clicks on a button store the result of the button click - store the result in a variable
const optionButtons = document.getElementsByClassName('option-button');

for(let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', function(event) {
        // event what is going on
        // target which element has been clicked
        // value of the element
        const userChoice = event.target.value;
        const computersChoice = computersChoiceGenerator();
        console.log('userChoice: ', userChoice);
        console.log('computersChoice: ', computersChoice);
        findWinner(userChoice, computersChoice);
    });
}

function findWinner (userChoice, computersChoice) {
    
    // check to see if the computer is the winner
    const computerSelection = selection.find(
        function(item) {
            return item.name === computersChoice
        });
    
        if(computerSelection.beats === userChoice) {
            console.log('computer wins');
            updateScores('computer')
            return;
        }
    
    // check to see if the user is the winner
    const userSelection = selection.find(
        function(item) {
            return item.name === userChoice
        });

        if(userSelection.beats === computersChoice) {
            console.log('user wins') 
            updateScores('user')
            return;
        }
    
        // if neither if statements run the round is a draw
    console.log('it is a draw')
}



function updateScores (winner) {
    console.log('updateScores', winner)
    // if winner === user update the user score
    if(winner === 'user') {
        const userScore = document.getElementById('user-score');
        let userCurrentScore = parseInt(userScore.innerText);
        const userUpdatedScore = userCurrentScore += 1;
        userScore.innerText = userUpdatedScore;
    }
    // if winner === computer update the computer score
    if(winner === 'computer') {
        const computerScore = document.getElementById('computer-score');
        let computerCurrentScore = parseInt(computerScore.innerText);
        const userUpdatedScore = computerCurrentScore += 1;
        computerScore.innerText = userUpdatedScore;
    }
}

function resetScores() {
    const computerScore = document.getElementById('computer-score');
    const userScore = document.getElementById('user-score');

    computerScore.innerText = 0;
    userScore.innerText = 0;
}

// Find a way to randomise the computers choice - function
function computersChoiceGenerator () {
    const options = ['rock', 'paper', 'scissors'];
    const randomResult = options[Math.floor(Math.random() * options.length)];
    return randomResult;
}

// check who wins that round - function & if / else statement
// update the winner of that rounds points - function 
// reset the games points - function