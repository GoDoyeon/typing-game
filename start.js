const startBtn = document.querySelector('.startBtn')
const game = document.querySelector('.game')

function startGame() {
    startBtn.classList.add('hiding');
    game.classList.remove('hiding');
}

startBtn.addEventListener('click', startGame);
