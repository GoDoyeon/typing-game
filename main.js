

const startBtn = document.querySelector('.startBtn');

const gameContainer = document.querySelector('.gameContainer'),
    clockTitle = gameContainer.querySelector('h2');

// startBtn 클릭이벤트

startBtn.addEventListener('click', startGame);

function startGame() {
    gameContainer.style.display = 'block';
    startBtn.style.display = 'none';
    startClock();
}

// 시간 설정

let seconds = 0,
    minutes = 0,
    hours = 0;


function startClock() {
    add();
    
}
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    timer();
}
function timer() {
    setTimeout(add, 1000);
}
