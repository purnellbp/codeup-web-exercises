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
// Object table build. To easlily access data later
var iconTable = {

    "time": 1583388000,
    "summary": "Clear throughout the day.",
    "icon": "clear-day",
    "sunriseTime": 1583412900,
    "sunsetTime": 1583455020,
    "moonPhase": 0.36,
    "precipIntensity": 0.0008,
    "precipIntensityMax": 0.0023,
    "precipIntensityMaxTime": 1583472180,
    "precipProbability": 0.06,
    "precipType": "rain",
    "temperatureHigh": 75.87,
    "temperatureHighTime": 1583446380,
    "temperatureLow": 50.67,
    "temperatureLowTime": 1583495820,
    "apparentTemperatureHigh": 75.37,
    "apparentTemperatureHighTime": 1583446380,
    "apparentTemperatureLow": 51.16,
    "apparentTemperatureLowTime": 1583495820,
    "dewPoint": 42.1,
    "humidity": 0.53,
    "pressure": 1023.7,
    "windSpeed": 8.62,
    "windGust": 28.2,
    "windGustTime": 1583388000,
    "windBearing": 0,
    "cloudCover": 0.21,
    "uvIndex": 8,
    "uvIndexTime": 1583433900,
    "visibility": 10,
    "ozone": 294.3,
    "temperatureMin": 49.94,
    "temperatureMinTime": 1583407860,
    "temperatureMax": 75.87,
    "temperatureMaxTime": 1583446380,
    "apparentTemperatureMin": 50.43,
    "apparentTemperatureMinTime": 1583407860,
    "apparentTemperatureMax": 75.37,
    "apparentTemperatureMaxTime": 1583446380

};

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
        $('#todayDate').empty().append(timeConvert(tmpTime))
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
    getMetaData();
}



// Sandboxing


