export const pad = (num, qvl) => {
  return num.toString().padStart(qvl, "0");
};
export const secsToDays = (time) =>
  pad(Math.floor(time / (1000 * 60 * 60 * 24)), 3);
export const secsToHours = (time) =>
  pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
export const secsToMins = (time) =>
  pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2);
export const secsToSecs = (time) =>
  pad(Math.floor((time % (1000 * 60)) / 1000), 2);
