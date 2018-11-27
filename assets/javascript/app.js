window.addEventListener('load', init);

// Global Variables
let time = 5;
let score = 0;
let playing;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// possible words to type
const words = [
    // add words
]

// Initialize game
function init() {
    // Load word from array
    showWord(words);

    wordInput.addEventListener('input', startGame);

    // Run countdown
    setInterval(countdown, 1000);

    // Check game status
    setInterval(checkStatus, 50);
}

// Start Game
function startGame() {
    if (gameWords()) {
        
    }
}

// Match currentWord to wordInput
function gameWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


// Randomly pick word from array
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

// Countdown
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        playing = false;
    }
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!playing && time === 0) {
        message.innerHTML = 'Game Over!!';
    }
}