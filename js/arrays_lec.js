"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it



//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];
var pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);
// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]
var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);
// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ["tacos", "chicken", "steak", "whiskey", "Guiness"];
console.log(favoriteFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

// console.log("\n");

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
// console.log("length of shapes array is " + shapes.length);
//
//
// // TODO: console.log the length of the instructors array
// // TODO: console.log the length of the daysOfTheWeek array
// // TODO: console.log the length of the favoriteFoods array
// console.log( "length of instructors array is " + instructors.length);
// console.log("length of daysOfTheWeek array is " + daysOfTheWeek.length);
// console.log("length of favoriteFoods array is " + favoriteFoods.length);

/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// console.log("\n");

// TODO TOGETHER: What do we expect the following to output?
//     console.log(shapes[0]); // square
// 	console.log(shapes[1]); // rectangle
// 	console.log(shapes[2]); // circle
// 	console.log(shapes[3]); // triangle
// 	console.log(shapes[4]); // undefined



// TODO: console.log each element of the instructors array
// console.log("\n Instructors: ");
// for (var i = 0; i < instructors.length; i++){
//     console.log(instructors[i]);
// }
// TODO: console.log the first three elements of the daysOfTheWeek array
// console.log("\n Days of the week, first 3 days");
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[2]);
// TODO: console.log the first three elements of the favoriteFoods array
// console.log("\n Favorite Foods, first 3 elements: ");
// for (var i = 0; i < 3; i++) {
//     console.log(favoriteFoods[i]);
// }

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
// console.log("\n `returnLastElement` that accepts an array and returns the last element of that array");

// function returnLastElement(arry) {
// var last = arry.length -1;
//    return arry[last];
// }
//
// console.log(returnLastElement(instructors));
// console.log(returnLastElement(favoriteFoods));
// console.log(returnLastElement(daysOfTheWeek));


/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
// console.log("\n Shapes array stuff ");


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
// for (var i = 0; i < shapes.length; i++){
//     console.log("The shape at index " + i + " is " + shapes[i]);
// }

console.log("TODO TOGETHER: Alert that's my favorite shape! when your favorite shape is iterated over in the loop.\n \n");
for (var i = 0; i < shapes.length; i++){

    console.log("The shape at index " + i + " is " + shapes[i]);
}

// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"



/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
// for(var i = 0; i < shapes.length; i++){
//     console.log(shapes[i]);
// }

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
// for(var i = 0; i < pies.length; i++){
//     console.log(pies[i]);
// }
pies.forEach(function (thePie) {
console.log(thePie);
});


// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function (x) {
    console.log(x);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function (y) {
    console.log(y);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function (z) {
    console.log(z);
});