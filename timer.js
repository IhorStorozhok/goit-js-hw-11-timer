import {
  pad,
  secsToDays,
  secsToHours,
  secsToMins,
  secsToSecs,
} from "./mathOperators.js";

const els = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    if (targetDate > Date.now()) {
      this.selector = selector;
      this.targetDate = targetDate;
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
  targetDate: new Date("Dec 17, 2021"),
});
