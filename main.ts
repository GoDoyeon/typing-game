class Quize {
    watch: number;
    time: number;
    curTime?: Date ;
    min:string;
    sec:string;
    ms:string;
    timerBox:HTMLDivElement | null;

    constructor() {
        this.watch = 0;
        this.time = 0;
        this.min = '00';
        this.sec = '00';
        this.ms = '00';
        this.timerBox = null;
        this.gameStart();
    }

    gameStart() {
        let quizeStartBtn = (document.querySelector('.quiz-start')as HTMLDivElement)

        quizeStartBtn.addEventListener('click',()=>{
            quizeStartBtn.remove();
            this.start();
            this.watchRender();
        })
    }
    timer() {
        this.curTime = new Date(Date.now() - this.time)

        this.min = this.addZero(this.curTime.getMinutes())
        this.sec = this.addZero(this.curTime.getSeconds())
        this.ms = this.addZero(Math.floor(this.curTime.getMilliseconds() / 10))

        this.timerBox!.textContent = this.min + ':' + this.sec + ':' + this.ms;
    }
    start() {
        this.time = Date.now()
        this.watch = setInterval(() => this.timer(), 100);
    }
    stop() {
        clearInterval(this.watch);
    }
    watchRender() {
        this.timerBox =  document.createElement('div')as HTMLDivElement;
        this.timerBox.classList.add('timerBox')as void;

        (document.getElementById('quiz-wrap')as HTMLDivElement).prepend(this.timerBox)
    }
    addZero(num:number) {
        return (num < 10 ? '0'+num : ''+num)
    }
}

const quize = new Quize();

