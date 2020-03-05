"use strict";

$(document).ready(function () {
    pullWeatherUS();
});

// MapBod Style URL
const mapStyleUrl = "mapbox://styles/purnellbp/ck7ez41uo02q21io1eh6xpbzy";
// Call dark sky api
var lat = 29.314;
var lng = -98.348;
var weatherURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/367c5d9973a93e063155e375c4640d28/"
    + lat
    + ","
    + lng;


// Converts UNIX Time Stamp to Human readable
function timeConvert(unixTime) {
    var dateObject = new Date(unixTime * 1000);
    return dateObject.toLocaleDateString();
}


// **************************************
function fToC(fahrenheit)
{
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    return fToCel.toFixed(0);
}


// **************************************


$("#mericanTemp").click(function(){
    pullWeatherUS();
});
$("#metricTemp").click(function () {
    pullWeatherMetric();
});

function getMetaData() {
    // DAILY temp high and low[x].. icon[ ] .. clouds:[ ] .. humidity[ ].. wind speed[ ] .. pressure[ ] ..

    $.get(weatherURL).done(function (data) {
        var tmpTime = data.daily.data[0].time;
        $('#todayDate').append(timeConvert(tmpTime))
        $('#dayZero-weatherBox').append("<br>"+data.daily.data[0].icon)


    });
}

function pullWeatherUS() {
    $.get(weatherURL).done(function (data) {
        console.log(data.daily.data[0]);
        $('#dayZero-weatherBox').empty().append(data.daily.data[0].temperatureHigh.toFixed(0) + "|" + data.daily.data[0].temperatureLow.toFixed(0) +
            "<span>&#8457</span>"
        )
    });
    getMetaData();
}

function pullWeatherMetric(){
    $.get(weatherURL).done(function (data) {
        var hi = data.daily.data[0].temperatureHigh;
        var low = data.daily.data[0].temperatureLow;
        var tempInCelsiusHi = fToC(hi);
        var tempInCelsiusLow = fToC(low);
        console.log(tempInCelsiusHi);
        console.log(tempInCelsiusLow);
        $('#dayZero-weatherBox').empty().append( tempInCelsiusHi + "|" + tempInCelsiusLow +
            "<span>\xB0C</span>"
        )
    });
}



// Sandboxing


