let timeh = document.querySelector(".currentTime");

let startBtn = document.querySelector(".startBtn");
let resetBtn = document.querySelector(".resetBtn");

let timerId;

let curTime = {
    hh: 0,
    mm: 0,
    ss: 0,
    mss: 0,
}

function updateTime(){
    timeh.innerHTML = `${curTime.hh > 9 ? "" : "0"}${curTime.hh}:${curTime.mm > 9 ? "" : "0"}${curTime.mm}:${curTime.ss > 9 ? "" : "0"}${curTime.ss}:${curTime.mss}`;
}

updateTime();


let startHandler = function(){
    startBtn.removeEventListener("click", startHandler);
    startBtn.addEventListener("click", pauseHandler);
    startBtn.innerHTML = "Пауза";

    timerId = setInterval(function(){
        curTime.mss++;
        if(curTime.mss==10){
            curTime.ss++;
            curTime.mss = 0;
        }
        if(curTime.ss==60){
            curTime.mm++;
            curTime.ss = 0;
        }
        if(curTime.mm==60){
            curTime.hh++;
            curTime.mm = 0;
        }
        updateTime();
    }, 100);
}

let pauseHandler = function(){
    startBtn.removeEventListener("click", pauseHandler);
    startBtn.addEventListener("click", startHandler);
    startBtn.innerHTML = "Продолжить";
    clearInterval(timerId);
}

startBtn.addEventListener("click", startHandler);

let resetHandler = function() {
    curTime.hh =  0;
    curTime.mm = 0;
    curTime.ss = 0;
    curTime.mss = 0;
    updateTime();
    pauseHandler();
    startBtn.innerHTML = "Старт";
}

resetBtn.addEventListener("click", resetHandler);