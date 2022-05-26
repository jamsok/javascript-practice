// 'use strict';
// const number = Math.random();
// document.querySelector('.number').textContext = number;

//querySelector
// console.log(document.querySelector('.message').textContent);
// // manipulating the DOM
// document.querySelector('.message').textContent = 'Correct Guessing';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.submit').addEventListener('click', function (event) {
//   console.log(document.querySelector('.email').value);
//   console.log(document.querySelector('.name').value);
//   event.preventDefault();
// });

//..................guess game Logic.........................

let snumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  document.querySelector('.message').textContent = 'Try Again';
  if (!guess) {
    document.querySelector('.message').textContent = '😒 no number';
    //when guess is correct
  } else if (guess === snumber) {
    document.querySelector('.message').textContent = 'correct';
    // return right;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = snumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //when the guess is wrong
  else if (guess !== snumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > snumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //
  // else if (guess > snumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < snumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start';
});
