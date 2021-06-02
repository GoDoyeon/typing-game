const wordContainer = document.querySelector('.wordContainer'),
    word = wordContainer.querySelector('h1');

const inputForm = document.querySelector('.inputForm'),
    inputText = inputForm.querySelector('input');

const arr = [
    'apple',
    'banna',
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
    'window'
];

function randomItem(item) {
    return item[Math.floor(Math.random() * item.length)];

}
word.innerText = randomItem(arr);
 

inputForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = inputText.value;
    paintText(currentValue);
    inputText.value = "";
}


function paintText(text) {
    if (text === word.innerText) {
        word.innerText = randomItem(arr);
    } else {
       word.innerText = randomItem(arr);
    }
}




