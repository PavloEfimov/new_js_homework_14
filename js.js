const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");


function CountTime() {
    this.startTime = 0;
    this.stopTime = 0;
    this.interval = 0;
}


CountTime.prototype.start = function startNow() {
    startTime = Date.now();

}
CountTime.prototype.stop = function stopNow() {
    stopTime = Date.now();
    interval = stopTime - startTime;
    console.log(`interval: ${interval} ms`);
}


let thisTime = new CountTime;



startButton.addEventListener("click", thisTime.start);
stopButton.addEventListener("click", thisTime.stop);