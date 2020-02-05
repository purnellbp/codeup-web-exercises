"use strict";
// console.log("Hello from external JS!");
// alert("Welcome to my website.");
// var userColor = prompt("What is your favorite color?");
// if (userColor == "blue"){
//     alert("THAT'S MY FAVORITE TOO! OMG");
// } else alert("Ok, whatever.");

// START Movie Rental Thing
/*
const rentPrice = 3;
var movieOne = prompt("You have rented three movies... obviously. \nWhat is the title of the first movie?");
var movieTwo = prompt("Alright, your first movie was " + movieOne + " \nWhat is the SECOND movie you are renting?");
var movieThree = prompt("Terrific. You're doing swell. \nYou entered " + movieOne + " and " + movieTwo + " so far. \nWhat is the THIRD movie you are renting?");
var rentTimeOne = prompt( "All righty then. \nHow long would you like to rent "+ movieOne +"?");
var rentTimeTwo = prompt( "And how long would you like to rent "+ movieTwo +"?");
var rentTimeThree = prompt( "Finally how long would you like to rent "+ movieThree +"?");

var totalRentCharge = (rentPrice*rentTimeOne)+(rentPrice*rentTimeTwo)+(rentPrice*rentTimeThree);
alert("You will be charged: $" + totalRentCharge.toFixed(2));
*/
// END Movie rental Thing


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
// rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
/*
var gooPay = 400, amazonPay = 380, facePay = 350;
var gooTime = Number(prompt("How many hours did you work for Google this week?"));
var amazonTime = Number(prompt("How many hours did you work for Amazon this week?"));
var faceTime = Number( prompt("How many hours did you work for Facebook this week?"));
var payCheck = (gooPay*gooTime)+(amazonPay*amazonTime)+(facePay*faceTime);
alert("This week's pay check is: $" + payCheck.toFixed(2));
*/


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
// her current schedule.

/*
var isClassFull = confirm("Is the class full?");
if (isClassFull === false) {
    var isThereConflict = confirm("Is there a schedule conflict?");
        if (isThereConflict === false){
     if ((isClassFull === false) && (isThereConflict === false)) {
        var registerClass = confirm("Current data:  \nIs the class full?: " + isClassFull + "\nSchedule conflict?: " + isThereConflict + "\nYou are eligible for this class. Would you like to continue?")
    } else (alert("You can not register."));
    if (registerClass === true) {
        alert("You are registered for this class.");
    } else alert("You are NOT registered for this class.");
}} else alert("Registration cancelled.");
*/


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

/*
var canBuy = false, buyMoreThan2 = false, offerExpired = false, premiumMember = true;

if ((buyMoreThan2 === true) && (offerExpired === false) || ((offerExpired === false)&&(premiumMember === true))){
    canBuy = true;
    console.log(canBuy);
} else alert("YOU BUY NOTHING! GOOD DAY!");

 */
