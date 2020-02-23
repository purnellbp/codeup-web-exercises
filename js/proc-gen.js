"use strict";


const generateRandomString = function(length=6){
    return Math.random().toString(16).substr(2, length)
}

console.log(generateRandomString(10));

console.log(parseInt(generateRandomString(10, 16)));