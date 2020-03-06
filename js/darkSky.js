"use strict";
// TODO: Interactive Hourly
// TODO: Pollen Count
// TODO: Add Charts https://canvasjs.com/javascript-charts/chart-image-overlay
// IMPORTANT - Does the initial pull for the weather to populate the document.
$(document).ready(function () {
   pullWeatherUS(0);
    setTimeout(function(){
        pullWeatherUS(1);
         }, 1000);
    setTimeout(function(){
    pullWeatherUS(2);
    }, 1000);

});
// *************************************************************************************************

// TODO: Map Navigation
// MapBod Style URL
const mapStyleUrl = "mapbox://styles/purnellbp/ck7ez41uo02q21io1eh6xpbzy";
// Call dark sky api
var lat = 29.314;
var lng = -98.348;
// var weatherURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/367c5d9973a93e063155e375c4640d28/"
//     + lat
//     + ","
//     + lng;

function urlBuilder(lat, lng) {
    return "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkysKey + "/" + lat + "," + lng;
}
// *************************************************************************************************
// GEOLOCATION Data
// *************************************************************************************************
// location Search url
// 'https://api.mapbox.com/geocoding/v5/mapbox.places/san%20anto.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g'

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
     $.get(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        // .then(function(res) {
        //     return res.json();
        //     // to get all the data from the request, comment out the following three lines...
        // })
        .done(function(data) {
            // console.log("fucntion returned: ");
            // console.log(data.features[0].center);
            return data.features[0].center;

            // console.log(data);
        });
}


$(document).on('keypress',function(e) {
    if(e.which === 13) {
        var search  = $('#searchInput').val();
        console.log("user entered: " + search);
        geocode(search, mapboxToken);
        console.log(newCenter);
        // Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
        map.flyTo({
            center: [0,0],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    }
});
// ****************************************************************************************************
// MapBox
// ****************************************************************************************************
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4951, 29.4246],
    zoom: 10,
    pitch: 60, // pitch in degrees
    bearing: 0 // bearing in degrees
});

// ****************************************************************************************************
// ************* UTILITIES ****************************************************************************

// Converts the data.icon element to the appropriate class name to display the proper weather icon.
// Icon/font pack borrowed from https://erikflowers.github.io/weather-icons/
// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
function iconPull(iconName) {
    var output = "";
    switch (iconName) {
        case 'clear-day':
            output = "wi-forecast-io-clear-day";
            break;
        case 'clear-night':
            output = "wi-forecast-io-clear-night";
            break;
        case  'rain':
            output = "wi-forecast-io-rain";
            break;
        case  'snow':
            output = "wi-forecast-io-snow";
            break;
        case 'sleet':
            output = "wi-forecast-io-sleet";
            break;
        case 'strong-wind':
            output = "wi-forecast-io-wind";
            break;
        case 'fog':
            output = "wi-forecast-io-fog";
            break;
        case 'cloudy':
            output = "wi-forecast-io-cloudy";
            break;
        case 'day-cloudy':
            output = "wi-forecast-io-partly-cloudy-day";
            break;
        case 'partly-cloudy-day':
            output = "wi-forecast-io-partly-cloudy-day";
            break;
        case 'night-cloudy':
            output = "wi-forecast-io-partly-cloudy-night";
            break;
        case 'hail':
            output = "wi-forecast-io-hail";
            break;
        case 'thunderstorm':
            output = "wi-forecast-io-thunderstorm";
            break;
        case 'tornado':
            output = "wi-forecast-io-tornado";
            break;
        case 'default':
            output = "d-none";
            break;
    }
    return "<i class=\"wi " + output + "\"></i>";
}

// *******************************************************
// Converts UNIX Time Stamp to Human readable
function timeConvert(unixTime) {
    var dateObject = new Date(unixTime * 1000);
    return dateObject.toLocaleDateString();
}

// Converts fahrenheit to celsius
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    return fToCel.toFixed(0);
}

// Converts angle to cardinal direction
function getCardinal(angle) {
    var degreePerDirection = 360 / 8;
    const offsetAngle = angle + degreePerDirection / 2;
    return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-n\"></i><span>N</span>"
        : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-ne\"></i><span>NE</span>"
            : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-e\"></i><span>E</span>"
                : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-se\"></i><span>N</span>"
                    : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-s\"></i><span>S</span>"
                        : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-sw\"></i><span>SW</span>"
                            : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "<i class=\"wi wi-wind wi-from-w\"></i><span>W</span>"
                                : "<i class=\"wi wi-wind wi-from-nw\"></i><span>NW</span>";
}

// ******************************************************************************************************
// ************* LISTENERS ******************************************************************************
// If the Fahrenheit option is selected we pull the standard API results
$("#mericanTemp").click(function () {
    pullWeatherUS(0);
    setTimeout(function(){
        pullWeatherUS(1);
    }, 1000);
    setTimeout(function(){
        pullWeatherUS(2);
    }, 1000);
});
// If metric is selected we convert temperatures and wind to celsius and kilometers
$("#metricTemp").click(function () {
    pullWeatherMetric(0);
    pullWeatherMetric(0);
    setTimeout(function(){
        pullWeatherMetric(1);
    }, 1000);
    setTimeout(function(){
        pullWeatherMetric(2);
    }, 1000);

});


// ******************************************************************************************************
// ************* WEATHER BUILD **************************************************************************

// TODAY'S FORECAST - [0]
// Gets all the appropriate data to display the weather forecasts, adjust styling responsively.
// DAILY temp high and low[x].. icon[ ] .. clouds:[ ] .. humidity[ ].. wind speed[ ] .. pressure[ ] ..
function getMetaData() {

    $.get(urlBuilder(lat, lng)).done(function (data) {
        var tmpTime = data.daily.data[0].time;
        $('#todayDate').empty().append(timeConvert(tmpTime))
        if ($(window).width() > 1200) {
            $('.wi').css('font-size', '3rem',);
        }

    });
}

// This is the Standard get without conversions then refreshes the box
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!

function pullWeatherUS(i) {
    var classDay = "#" + i + "-weatherBox";
    $.get(urlBuilder(lat, lng)).done(function (data) {
        console.log(data);
        $(classDay).empty().append(data.daily.data[i].temperatureHigh.toFixed(0) + " | " +
        data.daily.data[i].temperatureLow.toFixed(0) +
        "<span>&#8457</span>" +
        "<br>" +
        iconPull(data.daily.data[i].icon) +
        "<br>" +
        getCardinal(data.daily.data[i].windbearing)
            );
    });
    getMetaData();
}

// This calls the same as standard but with some fahrenheit to celsius conversions then refreshes the box
function pullWeatherMetric(i) {
    var classDay = "#" + i + "-weatherBox";
    $.get(urlBuilder(lat, lng)).done(function (data) {
        var hi = data.daily.data[i].temperatureHigh;
        var low = data.daily.data[i].temperatureLow;
        var windBear = data.daily.data[i].windbearing;
        var tempInCelsiusHi = fToC(hi);
        var tempInCelsiusLow = fToC(low);
        $('#dayZero-weatherBox').empty().append(tempInCelsiusHi + " | " + tempInCelsiusLow + "<span>\xB0C</span>" +
        "<br>" +
        iconPull(data.daily.data[i].icon) +
        "<br>" +
        getCardinal(windBear)
            );
    });
    getMetaData();
}
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!


// Sandboxing


