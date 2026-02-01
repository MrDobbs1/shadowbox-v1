

let countdownInterval;
let duration = 300;
const display = document.querySelector("#time");


function startTimer() {
    if (countdownInterval) {
        return;
    }

    let timer = duration;
    updateDisplay(timer);

    countdownInterval = setInterval(function () {
        timer++;
        updateDisplay(timer);

        if (timer <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;

            alert("time finished");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

function updateDisplay(timeInSeconds) {
    const minutes = parseInt(timeInSeconds / 60, 10);
    const seconds = parseInt(timeInSeconds % 60, 10);

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = formattedMinutes + ":" + formattedSeconds;
}