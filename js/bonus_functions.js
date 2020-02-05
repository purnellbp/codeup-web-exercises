"use strict";
// Make a function named isOdd(number)
function isOdd(num) {
return (num % 2) === 1;
}
//   console.log(isOdd(3));

// Make a function named isEven(number)
function isEven(num) {
    return (num % 2 === 0);
}
//   console.log(isEven(3));

// Make a function named identity(input) that returns the input exactly as provided.


function identity(input) {
    return input;
}
// console.log(identity("Literally anything."));

// Make a function named isFive(input)
function isFive(input) {

}

// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
return Number(input) + 5;
}
// console.log(addFive(10));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(num) {
return (num % 5 )=== 0;
}
// console.log(isMultipleOfFive(25)); // is true
// console.log(isMultipleOfFive(24)); // is false

// Make a function named isThree(input)
function isThree(input) {

}

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
return (input % 3)===0;
}
// console.log(isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
return ((input % 3)===0) && ((input % 5)===0);
}
// console.log(isMultipleOfThreeAndFive(15));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
return (target % n)===0;
}
// console.log(isMultipleOf(15, 5));

// Make a function named isTrue(boolean)
function isTrue(boolean) {
return boolean===true;
}
// console.log(isTrue(false));

// Make a function named isFalse(boolean)
function isFalse(boolean){
    return boolean===false;
}

// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
if (input !==false){
    return true;
} else  return false;
}
// console.log(isTruthy(4));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
    if (input !==true){
        return false;
    } else  return true;
}

// Make a function named isVowel(letter)
function isVowel(letter) {
  if (typeof letter !== 'string'){
      letter = letter.toString();
  }
    return ["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) !== -1;
}
// console.log(isVowel("R"));
// console.log(isVowel("r"));
// console.log(isVowel("A"));
// console.log(isVowel("a"));

// Make a function named isConsonant(letter)
function isConsonant(letter) {
    return ["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) === -1;
}
 // console.log(isConsonant("R"));
 // console.log(isConsonant("r"));
 // console.log(isConsonant("A"));
 // console.log(isConsonant("a"));

// Make a function named isCapital(letter)
function isCapital(letter) {
return letter === letter.toUpperCase();
}
// console.log(isCapital("A"));
// console.log(isCapital("a"));

// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
return letter === letter.toLowerCase();
}

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(string) {
    return string !== string.toUpperCase();
}
// console.log(hasLowerCase("AaAAAAAAA"));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    return letter === " ";
}
// console.log(isSpace(" "));

// Make a function named isZero(number)
function isZero(number) {
return number === 0;
}

// Make a function named notZero(input) that returns true if the input is not zero
function notZero(input) {
return input !== 0;
}

// Write a function named lowerCase(string)
function lowerCase(string) {
return string.toLowerCase();
}
// console.log(lowerCase("SADDSdddSSdDDdDDDddD"));

// Write a function named double(n) that returns a number times two
function double(n){
    return Number(n*2);
}

// Write a function named triple(n) that returns a number times 3
function triple(n) {
return Number(n*3);
}

// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
    return Number(n*4);
}

// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
    return Number(n/2);
}

// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
return a-b;
}

// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return a*b;
}

// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
return a/b;
}

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
return a % b;
}
// console.log(remainder(6, 66));

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a,b) {
    return a % b;
}

// Write a function named cube(n) that returns n * n * n
function cube(n) {
return n * n * n;
}

// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
return Math.sqrt(n);
}

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
return n/3;
}

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version
// of negative, and false for all else.
function invertSign(number) {
if (number !== 0){
    return number * -1;
} else return false;
}

// Write a function named degreesToRadians(number)
function degreesToRadians(number) {
    var pi = Math.PI;
    return number * (pi/180);
}

// Write a function named radiansToDegrees(number)
function radiansToDegrees(number){
    var pi = Math.PI;
    return number * (180/pi);
}

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input) {
return (input === " ") || (input === "     ")
}

// Make a function named trim(string) that removes empty spaces before and after the input.
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
