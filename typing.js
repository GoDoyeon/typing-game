'use strict'


const word = document.querySelector('.word');
const form = document.querySelector('.form');
let scoreSpan = document.querySelector('.score_span');
let playing;


let words = [
    'Rock',
    'Paper',
    'Scissors',
    'Random',
    'Map',
    'Constant',
    'Book',
    'variable',
    'Challenge',
    'accomplish',
    'political',
    'propose',
    'express',
    'inserting',
    'disagree',
    'against',
    'intended',
    'principal',
    'delay',
    'journalist'
]



//gain random score.
function gainScore() {
    let score = 0;
    let scores = [1, 2, 3, 4];
    let randomScore = Math.floor(Math.random() * scores.length);
    
    score = randomScore;
    scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + score;
    
}





//paint random Words.
function  paintWords(words) {
    const random = Math.floor(Math.random() * words.length);
    word.textContent = words[random];
}

//
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    if(currentValue.toLowerCase() === word.textContent.toLowerCase()) {
        paintWords(words);
        gainScore();
        input.value = "";
        input.classList.remove("incorrect");
        
    } else { 
        input.classList.add("incorrect");
        
    }
    
    

}


function init() {
    paintWords(words);
    form.addEventListener('submit', handleSubmit);
    
}

init();