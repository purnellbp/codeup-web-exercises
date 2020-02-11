"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// enter a number yes or no, yes = 3 alerts
function myNumber() {
    var whatUp = confirm("Would you like to enter a number?");
    if (whatUp) {
        var userNumber = Number(prompt("Enter a number"));
        if (isNaN(userNumber)) {
            alert("That is not a number.")
        } else {
            if (userNumber % 2 === 0) {
                alert("The number even");
            } else {
                alert("The number is odd.")
            }
            {
                alert("Your number plus 100 is: " + (userNumber + 100));
                if (userNumber > 0) {
                    alert("Your number is positive.")
                } else {
                    alert("Your number is negative.")
                }
            }
        }
    }
}

// console.log(myNumber());

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(theColor) {
    var colorOutput;
    if (theColor === "blue") {
        colorOutput = "blue is the color of the sky";
    } else if (theColor === "red") {
        colorOutput = "Strawberries are red.";
    } else if (theColor === "cyan") {
        colorOutput = "I don't know anything about cyan.";
    } else {
        colorOutput = "I don't know that color.";
    }
    return colorOutput;
}

// console.log(analyzeColor("red"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page */
function myRandomColor(theColor) {
    var colorOutput;
    if (theColor === "blue") {
        colorOutput = "blue is the color of the sky";
    } else if (theColor === "red") {
        colorOutput = "Strawberries are red.";
    } else if (theColor === "cyan") {
        colorOutput = "I don't know anything about cyan.";
    } else {
        colorOutput = "I don't know that color.";
    }
    return colorOutput;
}

// console.log(myRandomColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("What is your favorite color?");
// alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal() {
    var luckyNumber = Math.floor(Math.random() * 6);
    var i = Number(prompt("Total price of items: ")); // Cart Total
    var x; // Discounted Output

    if (isNaN(i)) {
        alert("This is not a number.")
    } else {
        switch (luckyNumber) {
            case 0 :
                x = "Discount is 0%. \nYour total is: $" + i;
                break;
            case 1 :
                x = "Discount is 10%. \nYour total is: $" + (i - (i * 0.1));
                break;
            case 2 :
                x = "Discount is 25%. \nYour total is: $" + (i - (i * 0.25));
                break;
            case 3 :
                x = "Discount is 35%. \nYour total is: $" + (i - (i * 0.35));
                break;
            case 4 :
                x = "Discount is 50%. \nYour total is: $" + (i - (i * 0.50));
                break;
            case 5 :
                x = "Discount is 100%. \nYour total is: $" + (i - i) + "\nFREE FREE FREE";
                break;
        }
        return x = alert("Before Discount: $" + i + "\n" + x);
    }
}

console.log(calculateTotal());


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
