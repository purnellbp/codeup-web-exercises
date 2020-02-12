"use strict";
/*
Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if
they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user
entered.
Your output should look like this:


Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
 */

// prompt for a neg number 1 - 50
// var x = 0;
// do {
//     var input = (prompt("Enter an odd number between 1 - 50"));
//     if ((input % 2 === 1) && (!isNaN(input)) && (input < 50) && (input > 0)) {
//         break;
//     } else {
//         console.log("invalid number");
//     }
// } while (true);
//
// console.log("number to skip is: " + Number(input));
// for (var y = 1; y <= 50; y++) {
//     if (y % 2 === 1) {
//         console.log(y);
//     }
//     if (y === Number(input)) {
//         console.log("Yikes, skipping number: " + input);
//     } else {
//         continue;
//     }
// }

// practice start

// Write a function that uses a loop to console.log "99 bottles of beer on the wall" until the passed argument number.
// Use a break to exit the loop, and console.log the message "Aw no, we're not doing that song again," in the event
// the argument is a number greater than 99, or is not a number.

// console.log("Let's sing 99 bottles of beer on the wall\n");
//
// do {
//     var beers = prompt("How many beers?");
//     if ((beers < 99) && (!isNaN(beers))) {
//         break;
//     } else {
//         console.log("Aw no, we're not doing that song again");
//     }
// } while (true);
//
// for (var i = beers; i > 0; i-- ){
//     console.log("Take one down and pass it around... " + i + " bottles of beer on the wall!");
// }
