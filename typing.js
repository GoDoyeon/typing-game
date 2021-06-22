const gameWord = document.querySelector('.game-word h1');
const wordInput = document.querySelector('.word-input');
const gameInput = document.querySelector('.game-input');
const gameScore = document.querySelector('.game-score span');
const gameLife = document.querySelector('.game-life span');

const vocabs = [
    "seclusivenesses","levanting","reship","takin","concelebrants","congenial","jisms","yellowlegs","glozed","zebrafishes","britt","bobbing","fishplate","lifelikeness","offkey","gravid","eructs","advantage","wolfsbane","warking","cichlids","oceanaria","saree","pretraining","speil","lustiest","underutilizes","seamark","reptilium","synagogs","frier","subsoiled","anatomist","vakil","bree","hardnoses","entrepreneurs","characid","truffe","nonsecretors","biotopes","fizzes","sarsnet","coerecting","pond","vesuvians","overcleaning","bouncer","rehouses","schadenfreude"
]
const MaxScore = 4;
const lifeSymbol = 'O';

let vocab_idx = 0;
let life = 3;
let score = 0;


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayVocab() {
    gameWord.textContent = vocabs[vocab_idx];
    vocab_idx++;
}

function gainScore() {
    let randomScore = Math.floor(Math.random() * MaxScore) + 1;
    score += randomScore;
}

function displayScore() {
    gameScore.textContent = score;
    if (score > 25) {
        alert("GAME CLEAR!");
        location.reload();
    }
}

function displayLife() {
    lifeStr = lifeSymbol.repeat(life);
    gameLife.textContent = lifeStr;
}

function checkAnswer(e) {
    e.preventDefault();
    let answerValue = gameWord.textContent;
    let userValue = wordInput.value;

    if (answerValue === userValue) {
        gainScore();
        displayScore();

        displayVocab();
        wordInput.value = "";
        wordInput.classList.remove("outline-incorrect");
    }
    else {
        wordInput.classList.add('outline-incorrect');
        life--;
        displayLife();
        if (life == 0) {
            alert('Game Over!');
            location.reload();
        }
    }
}

function submitWord(e) {
    e.preventDefault;
    validation(e);
}

function init() {
    shuffleArray(vocabs);
    displayVocab();
    displayLife();
    gameInput.addEventListener("submit", checkAnswer);
}

init();
