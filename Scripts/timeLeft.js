"use strict";
/**
 * Function to calculate time remaining for user to receive reply from support staff
 */

var clockID = setInterval(countdown, 1000);
// Calculates time left based on time 24hours from now
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
var countdownDate = tomorrow.getTime();
var timeLeft = 0;
function countdown() {
    // Calculates time left based on difference in time
    var now = new Date().getTime();
    timeLeft = countdownDate - now;
    var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minsLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var secsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    // Add leading zeros for uniformity
    var hrsString = addLeadingZero(hoursLeft);
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    // Change the text content of the elements with ID of hours, minutes and seconds
    document.getElementById("hours").textContent = hrsString;
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;
    // Checks if time is up
    checkTimer();
    // Updates value accordingly
    timeLeft--;
}

// Function to stop clock when time runs out
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeEnd',"<br />(Order Expired)"); 
    clearInterval(clockID);
}
// Checks if there is time remaining, otherwise stops the clock
function checkTimer() {
    if (timeLeft === 0) stopClock();
}
// Function to add leading zeros to single digit values
function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}
