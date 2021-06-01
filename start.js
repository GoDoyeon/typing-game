


//Click StartBtn to start game

const startBtn = document.querySelector(".start_btn"),
    form = document.querySelector(".timer_box"),
    input = document.querySelector(".input"),
    score = document.querySelector(".score");


function startGame() {
    startBtn.addEventListener('click', () => {
        startBtn.classList.add("hiding");
        form.classList.add("showing");
        input.classList.add("showing");
        score.classList.add("showing");

    })
}


//Start StopWatch when click the startBtn.


let hours = 00;
let minutes = 00;
let seconds = 00;
let interval;
const appendHours = document.querySelector(".hours");
const appendMinutes = document.querySelector(".minutes");
const appendSeconds = document.querySelector(".seconds");




function startTimer() {
    seconds++;
    if(seconds < 9){
        appendSeconds.innerText = `0${seconds}`;
    } else {
        seconds;
    }

    if(seconds > 99) {
        appendMinutes.innerText = minutes;
    }

}

startBtn.addEventListener('click', () => {
    interval = setInterval(startTimer);
})







function init() {
    startGame();
    startTimer();
    
}

init();
