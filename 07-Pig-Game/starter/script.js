'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dices = document.querySelector('.dice');
const newdic = document.querySelector('.btn--new');
const rolldic = document.querySelector('.btn--roll');
const holddic = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;
dices.classList.add('hidden');
const score = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;

const switchplayer = function () {
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rolldic.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const dic = Math.trunc(Math.random() * 6) + 1;

    //display dic
    dices.classList.add('hidden');
    dices.src = `dice-${dic}.png`;

    // display
    if (dic !== 1) {
      currentscore += dic;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
      // current0.textContent = currentscore;
    } else {
      //   is 1 switch to player 2
      switchplayer();
    }
  }
});
holddic.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 10) {
      playing = false;
      dices.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('activeplayer');
    } else {
      switchplayer();
    }
  }
});
