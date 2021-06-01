'use strict'


const startBtn = document.querySelector(".start_btn"),
    form = document.querySelector(".timer_box"),
    input = document.querySelector(".input"),
    score = document.querySelector(".score");

function clickBtn() {
    startBtn.addEventListener('click', () => {
        startBtn.classList.add("hiding");
        form.classList.add("showing");
        input.classList.add("showing");
        score.classList.add("showing");
    })
}

function init() {
    clickBtn();
}

init();
