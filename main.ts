class Quize {
    watch: number;
    time: number;
    curTime?: Date ;
    min?:string;
    sec?:string;
    ms?:string;

    constructor() {
        this.watch = 0;
        this.time = 0;
    }

    timer() {
        this.curTime = new Date(Date.now() - this.time)

        this.min = this.addZero(this.curTime.getMinutes())
        this.sec = this.addZero(this.curTime.getSeconds())
        this.ms = this.addZero(Math.floor(this.curTime.getMilliseconds() / 10))

        this.watchRender();
    }
    start() {
        this.time = Date.now()
        this.watch = setInterval(() => this.timer(), 100);
    }
    stop() {
        clearInterval(this.watch);
    }
    watchRender() {
        (document.querySelector('.time')as HTMLDivElement).textContent = `${this.min}:${this.sec}:${this.ms}`
    }
    addZero(num:number) {
        return (num < 10 ? '0'+num : ''+num)
    }
}

const quize = new Quize();

quize.start();

setTimeout(() => {
    quize.stop();
}, 8000);
