// p element - to display today's date on page load
var todaysDateEl = document.getElementById("currentDay");
todaysDateEl.textContent = moment().calendar();

// create array for dates and time / appointment info
var appointment =
    {
        date: "",
        time: "",
        info: ""
    };


// on page load - build working hours agenda - 8am-5pm
var buildAgenda = function() {
    // loop through the daily working hours
    for (let i = 0; i < 9; i++) {
        
    }

};


// after elements are created - style colors if past (gray) /present (red) /future (green)


// build ui

// save button functionality - submit - need a form for this to work