// p element - to display today's date on page load
var todaysDateEl = document.getElementById("currentDay");
todaysDateEl.textContent = moment().calendar();