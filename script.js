'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 10;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🏴‍☠️ NO Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '🌋 Too High!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '👀 Too Low!';
  }
});
