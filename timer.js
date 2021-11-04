class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    const pad = (num, qvl) => {
      return num.toString().padStart(qvl, "0");
    };

    const secsToDays = (time) =>
      pad(Math.floor(time / (1000 * 60 * 60 * 24)), 3);
    const secsToHours = (time) =>
      pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
    const secsToMins = (time) =>
      pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2);
    const secsToSecs = (time) =>
      pad(Math.floor((time % (1000 * 60)) / 1000), 2);

    const box = document.querySelector(this.selector);
    console.log(box);
    const els = {
      days: box.querySelector('[data-value="days"]'),
      hours: box.querySelector('[data-value="hours"]'),
      mins: box.querySelector('[data-value="mins"]'),
      secs: box.querySelector('[data-value="secs"]'),
    };

    if (targetDate > Date.now()) {
      const timeTicker = setInterval(() => {
        this.timeDifference = targetDate - Date.now();
        els.days.textContent = secsToDays(this.timeDifference);
        els.hours.textContent = secsToHours(this.timeDifference);
        els.mins.textContent = secsToMins(this.timeDifference);
        els.secs.textContent = secsToSecs(this.timeDifference);
      }, 1000);
    } else
      alert(
        "Упс...Выбранная дата уже позади, вернитесь в прошлое, или измените дату"
      );
  }
}

const timer3 = new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date("Feb 12, 2022"),
});
