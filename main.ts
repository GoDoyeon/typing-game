class Quize {
    watch: number;
    setTime: number;
    curTime?: Date;
    times:{ min:string; sec:string; ms:string };
    timerBox: HTMLDivElement | null;

    constructor() {
        this.watch = 0;
        this.setTime = 0;
        this.times = { min:'00', sec:'00', ms:'00' };
        this.timerBox = null;
        this.gameStart();
    }

    gameStart() {
        let quizeStartBtn = (document.querySelector('.quiz-start-btn')as HTMLDivElement)

        quizeStartBtn.addEventListener('click',()=>{
            quizeStartBtn.remove();
            this.start();
            this.watchRender();
        });
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
    }
    timerRender(){
        this.timerBox =  document.createElement('div')as HTMLDivElement;
        this.timerBox.classList.add('timerBox')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).prepend(this.timerBox);
    }
    addZero(num:number) {
        return (num < 10 ? '0'+num : ''+num);
    }
}

const quize = new Quize();

