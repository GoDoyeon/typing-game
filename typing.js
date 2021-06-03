'use strict'

const form = document.querySelector('.form'),
    input = form.querySelector('.input'),
    word = document.querySelector('.word');

let words = [
    'Rock',
    'Paper',
    'Scissors',
    'Random',
    'Map',
    'Constant',
    'Book',
    'variables',
    'Challenge',
    'accomplish'
]

const randomWords = words[Math.floor(Math.random() * words.length)];
console.log(randomWords);


function  paintWords() {
    word.textContent = randomWords;
    
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    if(currentValue === word.value) {
        
    } else {

    }
    input.value = "";
}


function init() {

    form.addEventListener('submit', handleSubmit);
    
}

init();