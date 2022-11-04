const message = document.querySelector('.message');

const button = document.querySelector('.button');
const randomNumber = Math.floor(Math.random() * 100);
const playAgain = document.querySelector('.refresh');
console.log(randomNumber);


button.addEventListener('click', () => {
    const inputNumber = document.querySelector('.inputNumber').value;
    const guessedOne = document.querySelector('.firstGuess');
    
    if(inputNumber < 1 || inputNumber > 100) {
        message.innerHTML = 'Please enter the number between 1 to 100.';
    }
    else if(inputNumber == randomNumber) {
        message.innerHTML = 'You have guessed the right number.';
    } else if(inputNumber < randomNumber) {
        message.innerHTML = 'You have guessed the low number.';
        let newfield = document.createElement("li");
        newfield.innerHTML = inputNumber;
        guessedOne.appendChild(newfield);
        
    } else if(inputNumber > randomNumber) {
        message.innerHTML = 'You have guessed the high number.';
        let newfield = document.createElement("li");
        newfield.innerHTML = inputNumber;
        guessedOne.appendChild(newfield);

    } else {
        message.innerHTML = 'Please enter number only.';
    }
    
});

playAgain.addEventListener('click', () => {
    location.reload();
})
 



        // <p class="message"></p>
        // <input type="text" class="inputNumber"><br><br>
        // <button class="button">Guess</button>