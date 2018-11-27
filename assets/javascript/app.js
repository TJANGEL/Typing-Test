window.addEventListener('load', init);

// Global Variables

// Levels
const levels = {
    easy: 6,
    medium: 4,
    hard: 2
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
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
    'dog',
    'cat',
    'apple',
    'grapefruit',
    'house',
    'empty',
    'intro',
    'cards',
    'review',
    'discord',
    'monopoly',
    'dodge',
    'elephant',
    'foreign',
    'development',
    'belly',
    'care',
    'heavy',
    'requirement',
    'fourteen',
    'believe',
    'proven',
    'yellow',
    'icecream',
    'breath',
    'entire',
    'beat',
    'hungry',
    'beer',
    'soda',
    'fern',
    'trash',
    'envelope',
    'bootstrap',
    'foundation',
    'possibilities',
    'sneakers',
    'fountain',
    'glasses',
    'horrendous',
    'quality'
]

// Initialize game
function init() {
    // Seconds in ui reflects current level
    seconds.innerHTML = currentLevel;

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
        playing = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    };
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
        // reset game and set score to 0
        message.innerHTML = 'Game Over!!';
        score = -1;
    }
}