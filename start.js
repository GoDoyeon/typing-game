


//Click StartBtn to start game

const startBtn = document.querySelector(".start_btn"),
    timerBox = document.querySelector(".timer_box"),
    input = document.querySelector(".input"),
    score = document.querySelector(".score"),
    gameBox = document.querySelector('.game_box');


function startGame() {
    startBtn.addEventListener('click', () => {
        startBtn.classList.add("hiding");
        timerBox.classList.add("showing");
        input.classList.add("showing");
        score.classList.add("showing");
        gameBox.classList.add("showing");

    })
}


//Start StopWatch when click the startBtn.


const timer = document.querySelector('.timer');
let secondCount = 0;
let stopWatch; //Define a global to store the interval when it is active.
const appendHours = document.querySelector(".hours");
const appendMinutes = document.querySelector(".minutes");
const appendSeconds = document.querySelector(".seconds");



function displayCount() {
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor(secondCount % 3600/60);
    let seconds = Math.floor(secondCount % 60);

    let displayHours = `${hours < 10 ? `0${hours}` : hours}`;
    let displayMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    let displaySeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

    timer.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

    secondCount++;
}

stopWatch = setInterval(displayCount, 1000);


function init() {
    startBtn.addEventListener('click', startGame);
    displayCount();
}

init();








