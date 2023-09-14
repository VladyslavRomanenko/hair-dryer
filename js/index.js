// --------------------  timer -----------------//
function startTimer(timerElement) {
  const hoursElement = timerElement.querySelector(".hours");
  const minutesElement = timerElement.querySelector(".minutes");
  const secondsElement = timerElement.querySelector(".seconds");

  let hours = 7;
  let minutes = 27;
  let seconds = 34;

  const interval = setInterval(function () {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      timerElement.style.display = "none";
    } else {
      if (seconds === 0) {
        if (minutes === 0) {
          hours--;
          minutes = 59;
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }

      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  }, 1000);
}

const timerElements = document.querySelectorAll(".timer");
timerElements.forEach(function (timerElement) {
  startTimer(timerElement);
});

// ----------- form -------- //

const formRef = document.querySelector(".form");
const backDrop = document.querySelector(".backdrop");
const backBtn = document.querySelector(".thanks-link");

const TOKEN = "6550736884:AAHCUGBNoVfbdOki4yPaK1VYwWkhmQo6V9w";
const CHAT_ID = "-1001944530488";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

formRef.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = formRef.elements.name.value;
  const phone = formRef.elements.phone.value;
  const address = formRef.elements.address.value;

  if (phone.length < 10 || phone.length > 12) {
    alert("Введіть коректно номер телефону");
  } else {
    let message = `<b>Заявка стайлер!</b>\n`;
    message += `<b>Ім'я: </b> ${name}\n`;
    message += `<b>Номер телефону: </b> ${phone}\n`;
    message += `<b>Адреса доставки: </b> ${address}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => {
        formRef.reset();
      })
      .catch((err) => {
        throw new Error(err);
      });

    backDrop.classList.remove("is-hidden");
  }
});

backBtn.addEventListener("click", () => {
  backDrop.classList.add("is-hidden");
});

backDrop.addEventListener("click", (event) => {
  if (event.target === backDrop) {
    backDrop.classList.add("is-hidden");
  }
});
