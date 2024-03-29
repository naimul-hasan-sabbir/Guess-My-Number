'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20 
let highscore = 0

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = '🏴‍☠️ NO Number!';
    displayMessage('🏴‍☠️ NO Number!')
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

  }else if(guess !== secretNumber){
    if(score > 1){
      //document.querySelector('.message').textContent = guess > secretNumber ? '🌋 Too High!' : '👀 Too Low!';
      displayMessage(guess > secretNumber ? '🌋 Too High!' : '👀 Too Low!')
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      //document.querySelector('.message').textContent = "You  Lost The Game!!!"
      displayMessage("You  Lost The Game!!!")
      document.querySelector('.score').textContent = 0;
    }
  } 
  // else if (guess > secretNumber) {

  //   if(score > 1){
  //     document.querySelector('.message').textContent = '🌋 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else{
  //     document.querySelector('.message').textContent = "You  Lost The Game!!!"
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  // } else if (guess < secretNumber) {
  //   if(score > 1){
  //     document.querySelector('.message').textContent = '👀 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = "You  Lost The Game!!!"
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  // }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start Guessing...'
  displayMessage('Start Guessing...')

  document.querySelector('.score').textContent = 0
  document.querySelector('.number').textContent = '?'

  document.querySelector('.guess').textContent = ''

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
