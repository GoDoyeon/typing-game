const wordContainer = document.querySelector('.wordContainer'),
    word = wordContainer.querySelector('h1');

const inputForm = document.querySelector('.inputForm'),
    inputText = inputForm.querySelector('input');

const scoreContainer = document.querySelector('.scoreContainer'),
    scoreText = scoreContainer.querySelector('span');

const wordArray = [
    'apple',
    'banana',
    'cup',
    'mouse',
    'computer',
    'ipad',
    'cellphone',
    'book',
    'pen',
    'bag',
    'key',
    'master',
    'cafe',
    'line',
    'flower',
    'door',
    'window',
    'star',
    'mask',
    'cow',
    'usually',
    'read',
    'tree',
    'dance',
    'camera',
    'rice',
    'kimchi',
    'ramen',
    'car',
    'best',
    'flash',
    'clear',
    'click',
    'coin',
    'desk',

];


let count = 0; // 틀린 횟수 확인용 변수
let currentValue = ''; //현재 input value값 대입
let innerTextWord = ''; // 현재 innerText 값 대입

//랜덤 단어
function randomWord() {
    
    let newWordArray = [];
    
    let randomArr = wordArray.splice(Math.floor(Math.random() * wordArray.length), 1);
    newWordArray.push(randomArr);
    let randomWord = newWordArray;
    word.innerText = randomWord;

}

// 틀린단어
function validation() {

    currentValue = inputText.value;;
    innerTextWord = word.innerText;

    if (currentValue != innerTextWord) {
        
        inputText.classList.add('outLine');
      
    }else if (currentValue === '' || currentValue === innerTextWord) {
        
        inputText.classList.remove('outLine');
    }
    inputForm.addEventListener("submit", answerSubmit);

}


// 점수 추가
function addScore() {

    let score = 0;
    const randomScore = [1, 2, 3, 4];

    score = randomScore[Math.floor(Math.random() * randomScore.length)];
    scoreText.innerText = parseInt(scoreText.innerText) + score;
    
    if (scoreText.innerText >= 25) {
        alert('게임 통과');
        location.reload();
    }
}



//정답확인
function answerSubmit(e) {
    e.preventDefault();
    randomWord();
    inputText.value = "";   
    if (currentValue === innerTextWord) {
        
        addScore();

    } else {

        count++;
        if (count === 3) {

            alert("Game Over");
            location.reload();
        }
    }
}


function init() {
    randomWord();
    inputText.addEventListener("input", validation);
}
init();