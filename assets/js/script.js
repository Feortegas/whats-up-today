// p element - to display today's date on page load
var todaysDateEl = document.getElementById("currentDay");
todaysDateEl.textContent = moment().format("MMM Do YY");

// save button event listener - 9am
$("#btn9am").click(function() {
    var appointment9amInfo = $("#text9am").val();
    if (appointment9amInfo) {
        localStorage.setItem("appointment9am", appointment9amInfo);
    }
});

// save button event listener - 10am
$("#btn10am").click(function() {
    var appointment10amInfo = $("#text10am").val();
    if (appointment10amInfo) {
        localStorage.setItem("appointment10am", appointment10amInfo);
    }
});

// save button event listener - 11am
$("#btn11am").click(function() {
    var appointment11amInfo = $("#text11am").val();
    if (appointment11amInfo) {
        localStorage.setItem("appointment11am", appointment11amInfo);
    }
});

// save button event listener - 12pm
$("#btn12pm").click(function() {
    var appointment12pmInfo = $("#text12pm").val();
    if (appointment12pmInfo) {
        localStorage.setItem("appointment12pm", appointment12pmInfo);
    }
});

// save button event listener - 1pm
$("#btn1pm").click(function() {
    var appointment1pmInfo = $("#text1pm").val();
    if (appointment1pmInfo) {
        localStorage.setItem("appointment1pm", appointment1pmInfo);
    }
});

// save button event listener - 2pm
$("#btn2pm").click(function() {
    var appointment2pmInfo = $("#text2pm").val();
    if (appointment2pmInfo) {
        localStorage.setItem("appointment2pm", appointment2pmInfo);
    }
});

// save button event listener - 3pm
$("#btn3pm").click(function() {
    var appointment3pmInfo = $("#text3pm").val();
    if (appointment3pmInfo) {
        localStorage.setItem("appointment3pm", appointment3pmInfo);
    }
});

// save button event listener - 4pm
$("#btn4pm").click(function() {
    var appointment4pmInfo = $("#text4pm").val();
    if (appointment4pmInfo) {
        localStorage.setItem("appointment4pm", appointment4pmInfo);
    }
});

// save button event listener - 5pm
$("#btn5pm").click(function() {
    var appointment5pmInfo = $("#text5pm").val();
    if (appointment5pmInfo) {
        localStorage.setItem("appointment5pm", appointment5pmInfo);
    }
});

// on page load - load data from local storage
var loadData = function() {
   var appointmentInfo = document.querySelector("#text9am");
   appointmentInfo.textContent = localStorage.getItem("appointment9am");

   appointmentInfo = document.querySelector("#text10am");
   appointmentInfo.textContent = localStorage.getItem("appointment10am");

   appointmentInfo = document.querySelector("#text11am");
   appointmentInfo.textContent = localStorage.getItem("appointment11am");

   appointmentInfo = document.querySelector("#text12pm");
   appointmentInfo.textContent = localStorage.getItem("appointment12pm");

   appointmentInfo = document.querySelector("#text1pm");
   appointmentInfo.textContent = localStorage.getItem("appointment1pm");

   appointmentInfo = document.querySelector("#text2pm");
   appointmentInfo.textContent = localStorage.getItem("appointment2pm");

   appointmentInfo = document.querySelector("#text3pm");
   appointmentInfo.textContent = localStorage.getItem("appointment3pm");

   appointmentInfo = document.querySelector("#text4pm");
   appointmentInfo.textContent = localStorage.getItem("appointment4pm");

   appointmentInfo = document.querySelector("#text5pm");
   appointmentInfo.textContent = localStorage.getItem("appointment5pm");
};


    var theHour = new Date().getHours();
    
    // 9AM
    if (theHour > 9) {
        $("#text9am").addClass("past");
    }
    else if (theHour >= 9 && theHour < 10) {
        $("#text9am").addClass("present");
    }
    else if (theHour < 9) {
        $("#text9am").addClass("future");
    }

    // 10AM
    if (theHour > 10) {
        $("#text10am").addClass("past");
    }
    else if (theHour >= 10 && theHour < 11) {
        $("#text10am").addClass("present");
    }
    else if (theHour < 10) {
        $("#text10am").addClass("future");
    }

    // 11AM
    if (theHour > 11) {
        $("#text11am").addClass("past");
    }
    else if (theHour >= 11 && theHour < 12) {
        $("#text11am").addClass("present");
    }
    else if (theHour < 11) {
        $("#text11am").addClass("future");
    }

    // 12PM
    if (theHour > 12) {
        $("#text12pm").addClass("past");
    }
    else if (theHour >= 12 && theHour < 13) {
        $("#text12pm").addClass("present");
    }
    else if (theHour < 12) {
        $("#text12pm").addClass("future");
    }

    // 1PM
    if (theHour > 13) {
        $("#text1pm").addClass("past");
    }
    else if (theHour >= 13 && theHour < 14) {
        $("#text1pm").addClass("present");
    }
    else if (theHour < 13) {
        $("#text1pm").addClass("future");
    }

    // 2PM
    if (theHour > 14) {
        $("#text2pm").addClass("past");
    }
    else if (theHour >= 14 && theHour < 15) {
        $("#text2pm").addClass("present");
    }
    else if (theHour < 14) {
        $("#text2pm").addClass("future");
    }

    // 3PM
    if (theHour > 15) {
        $("#text3pm").addClass("past");
    }
    else if (theHour >= 15 && theHour < 16) {
        $("#text3pm").addClass("present");
    }
    else if (theHour < 15) {
        $("#text3pm").addClass("future");
    }

    // 4PM
    if (theHour > 16) {
        $("#text4pm").addClass("past");
    }
    else if (theHour >= 16 && theHour < 17) {
        $("#text4pm").addClass("present");
    }
    else if (theHour < 16) {
        $("#text4pm").addClass("future");
    }

    // 5PM
    if (theHour > 17) {
        $("#text5pm").addClass("past");
    }
    else if (theHour >= 17 && theHour < 18) {
        $("#text5pm").addClass("present");
    }
    else if (theHour < 17) {
        $("#text5pm").addClass("future");
    }

loadData();