const bodyEl = document.body;

const timeEl = document.createElement("div");
timeEl.className = "orologio";
bodyEl.appendChild(timeEl);

let timeoutIds = [];

function countDown(time, message) {
  timeoutIds.push(
    setTimeout(() => {
      timeEl.textContent = message;
      if (message === "auguri bello") {
        timeEl.remove();
        btnEl.remove();
        document.body.style.backgroundColor = "red";
      }
    }, time)
  );
}

countDown(1000, "3");
countDown(2000, "2");
countDown(3000, "1");
countDown(4000, "questo messaggio si autodistruggerà in .....");
countDown(5000, "auguri bello");

// setTimeout(() => {
//   timeEl.remove();
//   btnEl.remove();
//   document.body.style.backgroundColor = "red";
// }, 5000);

const btnEl = document.createElement("button");
btnEl.textContent = "STOP, che però non ti salverà dalla distruzione!";
btnEl.classList.add("bottoncino");

btnEl.addEventListener("click", function () {
  timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
});
bodyEl.appendChild(btnEl);
