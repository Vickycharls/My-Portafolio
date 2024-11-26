// Countdown Timer
const countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();

const timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "We're Live!";
    }
}, 1000);