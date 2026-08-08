const openBtn = document.getElementById("openBtn");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

openBtn.addEventListener("click", function () {
    loader.classList.add("hidden");

    setTimeout(() => {
        content.classList.add("visible");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 500);
});


// Таймер до 16 августа 2026 года, 16:00

const weddingDate = new Date("2026-08-16T16:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);
