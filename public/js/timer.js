let breakIntervals = {
    shortStretch: 1* 60 * 1000,  // 2 minutes
    longStretch: 10 * 60 * 1000,   // 10 minutes
    shortBreak: 30 * 60 * 1000,     // 30 minutes
    longBreak: 3 * 60 * 60 * 1000,  // 3 hours
};

let messageElement = document.getElementById("messagetime");
let alarmSound = document.getElementById("alarmSound");
let timerIntervals = [];

function startReminders() {
    clearAllTimers();
    console.log("pawam");
    // we store all function  related to timer in array  becouse if we want to remove any of them we can easy find those
    // set interval return id's whic is may be use to delete function or remove from browser
    // Short stretches every 20-30 minutes


    document.getElementById("startButton").style.display="none";
    // setInterval(() => {
    //     document.getElementById("bellimg").style.display="inline";
    //     document.getElementById("stoptimer").style.display="inline";
    //     showMessage("Time for a 5-10 minute long stretch break! drink water");
    //     playAlarm();
    // }, 5000)
  
  
    timerIntervals.push(setInterval(() => {
        console.log("2 min done");
        document.getElementById("bellimg").style.display="inline";
        document.getElementById("stoptimer").style.display="inline";
        showMessage("Time for a quick 2-minute stretch!");
        playAlarm();
    }, breakIntervals.longStretch));

    // Long stretch every hour
    timerIntervals.push(setInterval(() => {
        document.getElementById("bellimg").style.display="inline";
        document.getElementById("stoptimer").style.display="inline";
        showMessage("Time for a 5-10 minute long stretch break! <br> drink water");
        playAlarm();
    }, breakIntervals.shortBreak));

    // Long break every 3 hours
    timerIntervals.push(setInterval(() => {
        document.getElementById("bellimg").style.display="inline";
        document.getElementById("stoptimer").style.display="inline";
        showMessage("Time for a 20-minute break! and drink water");
        playAlarm();
    }, breakIntervals.longBreak));

    messageElement.innerText = "Reminders have started!";
}

function showMessage(message) {
    messageElement.innerText = message;
}

function playAlarm() {
    alarmSound.currentTime = 0; // Reset the sound to play from the beginning
    alarmSound.play();
}
function pauseAlarm() {
    showMessage(" Stay focused! You will get reminders to take breaks.");
   
    document.getElementById("stoptimer").style.display="none";
    document.getElementById("bellimg").style.display="none";
    alarmSound.pause();
}

function clearAllTimers() {
   
    
    timerIntervals.forEach(timer => clearInterval(timer));
    timerIntervals = [];
}

document.getElementById("stoptimer").addEventListener("click",pauseAlarm);


// Start reminders when the button is clicked
// window.onload(startReminders())
// startReminders();
document.getElementById("startButton").addEventListener("click", startReminders);