class Quize {
    watch: number;
    setTime: number;
    curTime?: Date;
    times:{ min:string; sec:string; ms:string };
    quizeStartBtn: HTMLButtonElement | null;
    timerBox: HTMLDivElement | null;
    quizBox: HTMLDivElement | null;
    inputBox: HTMLInputElement | null;
    scoreEle: HTMLDivElement | null;
    failEle: HTMLDivElement | null;
    quizArray: string[];
    curQuiz: string;
    quizWrongCount: number;
    isAnswer: boolean;
    totalScore: number;

    constructor() {
        this.watch = 0;
        this.setTime = 0;
        this.times = { min:'00', sec:'00', ms:'00' };

        this.quizeStartBtn = null;
        this.timerBox = null;
        this.quizBox = null;
        this.inputBox = null;
        this.scoreEle = null;
        this.failEle = null;

        this.quizArray = ["ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "behind", "believe", "benefit", "best", "better", "between", "beyond", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "decade", "decide", "decision", "deep", "defense", "degree", "example", "executive", "exist", "expect", "experience", "first", "fish", "five", "floor", "fly", "focus", "follow", "food"];
        this.curQuiz = '';
        this.quizWrongCount = 0;
        this.isAnswer = false;
        this.totalScore = 0;

        this.gameStart();
    }

    gameStart() {
        this.quizBtnRender();

        this.quizeStartBtn!.addEventListener('click',()=>{
            this.quizeStartBtn!.remove();
            this.startQuizeHandle();
        });
    }
    startQuizeHandle(){
        this.start();
        this.watchRender();
        this.randomQuize();
        this.inputFocus();
        this.writeQuiz();
        this.submitQuiz();
    }
    timer() {
        let { min, sec, ms} = this.times;

        this.curTime = new Date(Date.now() - this.setTime);

        min = this.addZero(this.curTime.getMinutes());
        sec = this.addZero(this.curTime.getSeconds());
        ms = this.addZero(Math.floor(this.curTime.getMilliseconds() / 10));

        this.timerBox!.textContent = min + ':' + sec + ':' + ms;
    }
    start() {
        this.setTime = Date.now();
        this.watch = setInterval(() => this.timer(), 10);
    }
    stop() {
        clearInterval(this.watch);
    }
    watchRender() {
        this.timerRender();
        this.quizRender();
        this.inputRender();
        this.totalScoreRender();
    }
    quizBtnRender(){
        this.quizeStartBtn = document.createElement('button')as HTMLButtonElement;
        this.quizeStartBtn.classList.add('quiz-start-btn')as void;
        this.quizeStartBtn.innerText = '시작';

        (document.getElementById('quiz-wrap')as HTMLDivElement).append(this.quizeStartBtn);
    }
    timerRender(){
        this.timerBox =  document.createElement('div')as HTMLDivElement;
        this.timerBox.classList.add('timerBox')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).prepend(this.timerBox);
    }
    quizRender(){
        this.quizBox = document.createElement('div')as HTMLDivElement;
        this.quizBox.classList.add('quiz-box')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).append(this.quizBox);
    }
    inputRender(){
        this.inputBox = document.createElement('input')as HTMLInputElement;
        this.inputBox.classList.add('input-box')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).append(this.inputBox);
    }
    randomQuize(){
        const quizLen:number = this.quizArray.length || 0;
        const randomNum = Math.floor(Math.random() * quizLen);

        const quizText = this.quizArray[randomNum];
        this.quizArray.splice(randomNum,1);
        this.curQuiz = quizText;

        const text = quizText.split('').map((item:string,idx:number) => {
            return `<span class="text_${idx+1}">${item}</span>`
        }).join('');

        (document.querySelector('.quiz-box')as HTMLDivElement).innerHTML = `${text}`;
    }
    inputFocus(){
        this.inputBox!.focus();

    }
    writeQuiz(){
        const self = this;

        this.inputBox!.addEventListener('keyup',(evt:any)=>{
            if(evt!.target.value === self.curQuiz){
                self.isAnswer = true;
                this.inputBox!.classList.add('sucess');
                this.inputBox!.classList.remove('wrong');
            }else if(evt!.target.value !== self.curQuiz){
                self.isAnswer = false;
                this.inputBox!.classList.add('wrong');
                this.inputBox!.classList.remove('sucess');
            }
        });
    }
    submitQuiz(){
        const self = this;
        let timer:any;

        this.inputBox!.addEventListener('keypress',(evt:any)=>{
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                if(evt.keyCode === 13){
                    if(self.isAnswer){
                        self.randomQuize();
                        self.initInputText();
                        self.randomAddScore();
                        if(self.totalScore >= 25){
                            alert('통과');
                            self.stop();
                        }
                    }else{

                        self.quizWrongCount++;
                        self.failAlert(self.quizWrongCount);
                    }
                }
            },200);
        })
    }
    initInputText(){
        this.inputBox!.classList.remove('sucess');
        this.inputBox!.value = "";
    }
    randomAddScore(){
        let score = Math.floor(Math.random() * 4) + Number(1);

        this.totalScore += score;
        (document.querySelector('.score-box')as HTMLDivElement).innerText = `현재점수:${this.totalScore}`;
    }
    totalScoreRender(){
        this.scoreEle = document.createElement('div')as HTMLDivElement;
        this.scoreEle.classList.add('score-box')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).append(this.scoreEle);
        (document.querySelector('.score-box')as HTMLDivElement).innerText = `현재점수:${this.totalScore}`;
    }
    failAlert(count:number){
        if(count === 3){
            this.stop();
            this.failDialogRender();
        }
    }
    failDialogRender(){
        this.failEle = document.createElement('div')as HTMLDivElement;
        this.failEle.classList.add('fail-dialog-box')as void;

        let popupText = document.createElement('p')as HTMLDivElement;
        popupText.classList.add('fail-text')as void;
        popupText.innerText = 'Game Over';
        this.failEle.append(popupText);

        let totalScore = document.createElement('p')as HTMLDivElement;
        totalScore.classList.add('total-score')as void;
        totalScore.innerHTML = `최종점수<span>${this.totalScore}</span>점`;
        this.failEle.append(totalScore);

        let restartBtn = document.createElement('button')as HTMLButtonElement;
        restartBtn.classList.add('restart-text')as void;
        restartBtn.innerText = '재시작';
        restartBtn.addEventListener('click',()=>{
            this.initGame();
            this.failEle!.remove();
            this.startQuizeHandle();
        });
        this.failEle.append(restartBtn);

        (document.getElementById('quiz-wrap')as HTMLDivElement).append(this.failEle);
    }
    initGame(){
        const self = this;
        [self.quizeStartBtn, self.timerBox, self.quizBox, self.inputBox, self.scoreEle].map((item)=>{
            item!.remove();
        });

        self.totalScore = 0;
        self.quizWrongCount = 0;
    }
    addZero(num:number) {
        return (num < 10 ? '0'+num : ''+num);
    }
}

const quize = new Quize();

