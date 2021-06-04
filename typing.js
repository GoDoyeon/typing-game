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

];




//랜덤 단어
function randomWord() {
    
    let newWordArray = [];
    
    let randomArr = wordArray.splice(Math.floor(Math.random() * wordArray.length), 1)[0];
    newWordArray.push(randomArr);
    let randomWord = newWordArray[0];
    word.innerText = randomWord;

}

 
// 틀린단어
function validation(e) {
    e = inputText.value;
    let currentValue = e;
    let innerTextWord = word.innerText;

    if (currentValue != innerTextWord) {
        inputText.classList.add('outLine');
       //여기서 3번 돌아가면 alert창 뜨고 종료
    }
    
    if (currentValue === '' || currentValue === innerTextWord) {
        inputText.classList.remove('outLine');
        inputForm.addEventListener("submit", answerSubmit);
    }

}


// 점수 추가
function addScore() {

    let score = 0;
    const randomScore = [1, 2, 3, 4];

    score = randomScore[Math.floor(Math.random() * randomScore.length)];
    scoreText.innerText = parseInt(scoreText.innerText) + score;
}



//정답일때
function answerSubmit(e) {
    e.preventDefault();
    randomWord();
    inputText.value = "";
    addScore();
}


function init() {
    randomWord();
    inputText.addEventListener("input", validation);
}
init();