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
    })
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