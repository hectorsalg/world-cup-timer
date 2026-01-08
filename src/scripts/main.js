const targetDate = new Date("June 11, 2026 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('span');
    if (navbarMenu.classList.contains('active')) {
        icon.innerText = 'close';
    } else {
        icon.innerText = 'menu';
    }
});