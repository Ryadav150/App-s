// Stopwatch logic

let startTime, elapsedTime, timerInterval;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Event listeners for buttons


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

  // Function to start the timer
  
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
     // If the timer is already running, clear the interval to prevent multiple intervals
    }
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}
   // Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
   // Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
   // Function to update the timer display
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const formattedTime = formatTime(elapsedTime);
    display.textContent = formattedTime;
}
   // Function to format the time in HH:MM:SS.SS format
function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}
   // Function to pad single-digit values with leading zeros
function pad(value) {
    return value.toString().padStart(2, '0');
}