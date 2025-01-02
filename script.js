'use strict';

let score = 20;
let highestScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const checkButton = document.querySelector('.again');
const againButton = document.querySelector('.check');

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayWinning = function (color, width) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const displayGuess = function (value) {
    document.querySelector('.guess').value = value;
}
const getGuessingValue = function (value) {
    return document.querySelector('.guess').value;
}

checkButton.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayScore(score);
    displayGuess('');
    displayMessage('Start guessing...');
    displayWinning('black', '15rem');
})

againButton.addEventListener('click', function () {
    const guess = Number(getGuessingValue());
    // When there is no input
    if (!guess) {
        displayMessage("⛔️ No number!!!");
        // When player wins
    }else if (guess === secretNumber) {
        if (highestScore < score) {
            highestScore = score;
        }
        document.querySelector('.highscore').textContent = highestScore;
        displayMessage("🥳 Correct number!!!");
        displayWinning('green', '30rem');
    } else if (guess !== secretNumber) {
        let textMessage = guess > secretNumber ? "Too hight!" : "Too low!";
        if (score > 1) {
            score = score - 1;
            displayMessage(textMessage);
        } else {
            displayMessage("You lost the game!");
            score = 0;
        }
    }
    displayScore(score);
});

