let counterTimer = document.querySelector("#Timer");
let counter = 0;
let TimerID;

let startBtn = document.querySelector('#start');

startBtn.onclick = function() {
   TimerID = setInterval(() => {
        counter++;
        counterTimer.innerText = counter;
        }, 1000);
}

let stopBtn = document.querySelector('#stop');

stopBtn.onclick = function() {
    clearInterval(TimerID);
}

const resetBtn = document.querySelector('#reset');

resetBtn.onclick = function() {
    counter = 0;
    counterTimer.innerText = counter;
    clearInterval(TimerID);
}