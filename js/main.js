let score = 0;  // 점수를 담아줄 변수
let min = 0;    // 분
let sec = 0;    // 초
let mil = 0;    // 밀리초
let count = 0;  // 시간 세는 변수

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector(".game-start-btn");
const labBtn = document.querySelector(".lab-btn");

// start 버튼 누르면 화면 전환
window.onload = function() {
    
    console.log("start");
    var gameStartBtn = document.getElementById('game-start-btn');
    var gameStart = document.getElementById('game-start');
    
    gameStart.style.display="none";             // 처음엔 게임 화면을 숨기고
    
    gameStartBtn.onclick = function() {         // start 버튼을 클릭하면
        gameStart.style.display = 'block';      // 게임 화면을 보여주고
        gameStartBtn.style.display = 'none';    // start버튼을 숨긴다

    }
}


// 스톱워치 기능
function countTime() {
    console.log("countTime");
        startBtn.value = "중단";
        startBtn.className = "stop-btn";
        timer = setInterval(function () {
        count += 1;
        min = Math.floor(count / 6000);
        let namuzi1 = count % 6000;
        sec = Math.floor(namuzi1 / 100);
        let namuzi2 = namuzi1 % 100;
        mil = namuzi2;
        ClockPaint();
        }, 10);

        if (startBtn.value == "중단" && count != 0) {
        clearInterval(timer);
        startBtn.value = "시작";
        startBtn.className = "start-btn";
        labBtn.value = "재설정";
        labBtn.className = "reset-btn"; //class를 reset-btn으로 바꿈
    }
}


function ClockPaint() {
  timeDisplay.innerText = `${min < 10 ? "0" + min: min}:${
    sec < 10 ? "0" + sec : sec
  }:${mil < 10 ? "0" + mil : mil}`; //시간을 화면에 표시하는함수
}

function init() {
  startBtn.addEventListener("click", countTime); // 스타트버튼 클릭시 countTime함수 실행
}

init(); // 처음에 클릭이벤트를 실행하기 위해서 만들어둔 함수


// 엔터키가 눌렸을 때
function enterkey() {
    if (window.event.keyCode == 13) { 
        console.log("enter");
    } 
}

wordInput.addEventListener('input', ()=>{
        // toLowerCase를 사용하여 대소문자 구분 없이 비교한다.
        if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
            score++;
            scoreDisplay.innerText = score;
            wordInput.value = "";   // 단어 입력 후 단어 입력 칸 초기화
        }
})
