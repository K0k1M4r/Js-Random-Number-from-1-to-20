
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const btnCheck = document.getElementById('btnCheck');
const btnAgain = document.getElementById('btnAgain');
const inputGuess = document.getElementById('inputGuess');
const displayNumber = document.getElementById('displayNumber');
const displayScore = document.getElementById('displayScore');
const displayHighscore = document.getElementById('displayHighscore');
const displayMessage = document.getElementById('displayMessage');


const updateMessage = function (messageText) {
  displayMessage.textContent = messageText;
};

btnCheck.addEventListener('click', function () {
  const guess = Number(inputGuess.value);

  
  if (!guess) {
    updateMessage('⛔ No number entered!');

  
  } else if (guess === secretNumber) {
    updateMessage('🎉 Correct Number!');
    displayNumber.textContent = secretNumber; 
    
    
    document.body.style.backgroundColor = '#60b347'; 
    displayNumber.style.width = '12rem';


    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }

    
    btnCheck.disabled = true;
    inputGuess.disabled = true;


  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      updateMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore.textContent = score;
    } else {
      
      updateMessage('💥 You lost the game!');
      displayScore.textContent = 0;
      document.body.style.backgroundColor = '#b34747';
      
      
      btnCheck.disabled = true;
      inputGuess.disabled = true;
    }
  }
});


btnAgain.addEventListener('click', function () {
  
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  
  updateMessage('Start guessing...');
  displayScore.textContent = score;
  displayNumber.textContent = '?';
  inputGuess.value = '';

  
  document.body.style.backgroundColor = '#222';
  displayNumber.style.width = '6rem';

  
  btnCheck.disabled = false;
  inputGuess.disabled = false;
});
