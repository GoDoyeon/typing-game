const wordInput = document.querySelector('.word-input');
const wordInputForm = document.querySelector('.word-input-form');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector(".game-start-btn");
const labBtn = document.querySelector(".lab-btn");

// 게임 진행을 위한 변수
let score = 0;              // 점수를 담아줄 변수
let scores = [1, 2, 3, 4]   // 랜덤 점수
let opper = 0;              // 기회 

// 시간 계산을 위한 변수
let hour = 0;               // 시
let min = 0;                // 분
let sec = 0;                // 초
let count = 0;              // 시간 세는 변수

// 단어 API 
let words = ["seclusivenesses","levanting","reship","takin","concelebrants","congenial","jisms","yellowlegs","glozed","zebrafishes","britt","bobbing","fishplate","lifelikeness","offkey","gravid","eructs","advantage","wolfsbane","warking","cichlids","oceanaria","saree","pretraining","speil","lustiest","underutilizes","seamark","reptilium","synagogs","frier","subsoiled","anatomist","vakil","bree","hardnoses","entrepreneurs","characid","truffe","nonsecretors","biotopes","fizzes","sarsnet","coerecting","pond","vesuvians","overcleaning","bouncer","rehouses","schadenfreude"
]

// 랜덤 점수 부여
function gameScore() {
    let randomScore = Math.floor(Math.random() * scores.length)+1;
    console.log("randomScore : " +  randomScore);
    score = randomScore;
    scoreDisplay.innerHTML = parseInt(scoreDisplay.innerHTML) + score;
}

// start 버튼 누르면 화면 전환
window.onload = function() {
    
    console.log("start");
    var gameStartBtn = document.getElementById('game-start-btn');
    var gameStart = document.getElementById('game-start');
    
    gameStart.style.display="none";             // 처음엔 게임 화면을 숨기고
    
    gameStartBtn.onclick = function() {         // start 버튼을 클릭하면
        gameStart.style.display = 'block';      // 게임 화면을 보여주고
        gameStartBtn.style.display = 'none';    // start버튼을 숨긴다.
        
    }
}

// 단어 불러오기
function getWords(words){
    const random = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[random];
    console.log(wordDisplay);
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
        labBtn.className = "reset-btn"; //class를 reset-btn으로 바꾼다.
    }
}


function ClockPaint() {
    timeDisplay.innerText = `${min < 10 ? "0" + min: min}:${
        sec < 10 ? "0" + sec : sec
    }:${mil < 10 ? "0" + mil : mil}`; //시간을 화면에 표시하는함수
}


// 단어가 올바르게 입력 되었는지 확인한다.
function checkMatch(event) {
    event.preventDefault();
    const currentValue = wordInput.value;
    // toLowerCase를 사용하여 대소문자 구분 없이 비교한다.
    if (currentValue.toLowerCase() === wordDisplay.textContent.toLowerCase()) {
        getWords(words);
        gameScore();
        wordInput.value = "";   // 단어 입력 후 단어 입력 칸 초기화
        wordInput.classList.remove("Incorrect");
        console.log("score : "+scoreDisplay.innerHTML);
        if (scoreDisplay.innerHTML > 25) {
            alert("GAME CLEAR😆");
            location.reload();
        }
    } else {
        wordInput.classList.add("Incorrect");
        opper++;
        if (opper === 3) {
            alert("GAME OVER😭");
            location.reload();
        }
    }
    
}

function init() {
    getWords(words);
    startBtn.addEventListener("click", countTime); // 스타트버튼 클릭시 countTime함수 실행
    // input이 발생할 때마다 checkMatch 메소드가 실행된다.
    wordInputForm.addEventListener('submit', checkMatch);
}

// 처음에 클릭이벤트를 실행하기 위해서 만들어둔 함수
init(); 
