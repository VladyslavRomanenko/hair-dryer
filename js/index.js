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

formRef.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = formRef.elements.name.value;
  const phone = formRef.elements.phone.value;

  if (phone.length < 10) {
    alert("Введіть коректно номер телефону");
  }

  console.log("Ім'я: " + name);
  console.log("Телефон: " + phone);

  // formRef.reset();
});
