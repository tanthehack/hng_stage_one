const dayDiv = document.getElementById("currentDay");
const timeDiv = document.getElementById("currentTime");

let date = new Date();
let currentDay = date.getDay();

dayDiv.textContent = currentDay === 0 ? "Sunday" : currentDay === 1 ? "Monday" : currentDay === 2 ? "Tuesday" : currentDay === 3 ? "Wednesday" : currentDay === 4 ? "Thursday" : currentDay === 5 ? "Friday" : "Saturday";
timeDiv.textContent = date.getTime();