// =====================================
// ДАТА И ВРЕМЯ ВАЛИИМЫ
// =====================================

const eventDate = new Date("2026-08-16T14:00:00");


// =====================================
// ОБРАТНЫЙ ОТСЧЁТ
// =====================================

function updateCountdown() {

  const now = new Date();

  const difference =
    eventDate.getTime() - now.getTime();


  const days =
    document.getElementById("days");

  const hours =
    document.getElementById("hours");

  const minutes =
    document.getElementById("minutes");

  const seconds =
    document.getElementById("seconds");


  if (!days || !hours || !minutes || !seconds) {
    return;
  }


  if (difference <= 0) {

    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";

    return;
  }


  const totalSeconds =
    Math.floor(difference / 1000);


  const d =
    Math.floor(totalSeconds / 86400);


  const h =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );


  const m =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  const s =
    totalSeconds % 60;


  days.textContent = d;

  hours.textContent =
    String(h).padStart(2, "0");

  minutes.textContent =
    String(m).padStart(2, "0");

  seconds.textContent =
    String(s).padStart(2, "0");
}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


// =====================================
// КНОПКА ПОДТВЕРЖДЕНИЯ
// =====================================

const rsvpButton =
  document.getElementById("rsvpButton");


if (rsvpButton) {

  rsvpButton.addEventListener(
    "click",
    function(event) {

      event.preventDefault();


      const message =
        "Ассаляму алейкум! Я хочу подтвердить своё присутствие на валииме 16 августа 2026 года в 14:00.";


      const encodedMessage =
        encodeURIComponent(message);


      window.open(
        `https://wa.me/?text=${encodedMessage}`,
        "_blank"
      );

    }
  );

}
