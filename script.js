window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector('#stop');
    
    const endTime = new Date(date + " " + time);
    const startTime = new Date(); // Set start time to the current time

    const interval = setInterval(() => calculateTime(endTime, startTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    });
}

function calculateTime(endTime, startTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    const progressBar = document.querySelector("#progress-bar"); // Progress bar element

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000; // Time left in seconds
        const totalTime = (endTime - startTime) / 1000; // Total countdown time in seconds

        //  time left in days, hours, minutes, and seconds
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);

        // percentage of time passed
        const percentagePassed = ((totalTime - timeLeft) / totalTime) * 100;

        // Update progress bar width to show percentage of time passed
        progressBar.style.width = percentagePassed + "%";
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;

        // Set progress bar to 100% when the countdown is finished
        progressBar.style.width = "100%";
    }
}

function reset() {
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;

    // Reset progress bar
    document.querySelector("#progress-bar").style.width = "0%";
}
