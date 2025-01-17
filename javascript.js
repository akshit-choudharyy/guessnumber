let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame == true) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(userInput);
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('enter a number less then 100');
  } else if (guess < 0) {
    alert('enter a number greater then 0');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMeassage(`game over random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
//for checking nearest or not
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMeassage(`you are win, number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMeassage('your number is low');
  } else if (guess > randomNumber) {
    displayMeassage('your number is high');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}-`;
  numGuess++;
  console.log(guess)
  remaining.innerHTML = `${11 - numGuess}`;
  //
}

function displayMeassage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled',"");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    let randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })


}
