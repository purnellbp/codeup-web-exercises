"use strict";
// TODO: Interactive Hourly
// TODO: Pollen Count
// TODO: Add Charts https://canvasjs.com/javascript-charts/chart-image-overlay
// TODO:
// IMPORTANT - Does the initial pull for the weather to populate the document.
$('document').ready(function () {
    // Start scripts
    loadMapbox();
    setTimeout(function () {
        lottie.setSpeed(0.5, 'img/weather-img/data.json')
        lottie.loadAnimation({
            container: document.getElementById('logo'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            playSpeed: 0.2,
            path: 'img/weather-img/data.json' // the path to the animation json
        });
    }, 2000);
});
// *************************************************************************************************


// Call dark sky api
var lat = 29.4383;
var lng = -98.5031;
var darkURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkysKey + "/" + lat + "," + lng;
var tempSwitch = 0;
// Forecast cards
function buildCards() {

    $.get(darkURL)
        .done(function (data) {
            console.log(data);
            // Build Start
            for (var i = 0; i < data.daily.data.length; i++) {
                var dayA = data.daily.data[i];
                var thisCard = "#day" + i;
                var tempHigh = dayA.temperatureHigh + "\xB0F";
                var tempLow = dayA.temperatureLow + "\xB0F";
                if (tempSwitch === 1) {
                    tempHigh = fToC(dayA.temperatureHigh) + "\xB0C";
                    tempLow = fToC(dayA.temperatureLow) + "\xB0C";
                }
                $(thisCard).append("<h5 class=\"card-title\">" + timeConvert(dayA.time))
                    .append("</h5><p class=\"card-text\">" + dayA.summary + "</p>") // "blah blah throughout the day"
                    .append("<ul class=\"list-group list-group-flush\">")
                    .append("<li class=\"list-group-item text-primary\">" + tempHigh + " | " + tempLow + "</li>")
                    .append("<li class=\"list-group-item\">" + iconPull(dayA.icon) + "|" + getCardinal(dayA.windBearing) + "</li>")
                    .append("<li class=\"list-group-item\">Ves</li></ul>")


            }
        });
}

buildCards();
// ****************************************************************************************************
// MapBox
// ****************************************************************************************************
var mapStyleUrl = "mapbox://styles/purnellbp/ck7i2q7hr1qpy1ik7z9rg3a08";

function loadMapbox() {
    mapboxgl.accessToken = mapboxToken;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: mapStyleUrl,
        center: [0, 0],
        zoom: 2,
        pitch: 30
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
        );
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([0, 0])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
};
// ****************************************************************************************************
// ************* UTILITIES ****************************************************************************
// Converts the data.icon element to the appropriate class name to display the proper weather icon.
// Icon/font pack borrowed from https://erikflowers.github.io/weather-icons/
// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
function iconPull(iconName) {
    var output = "";
    var clouds = "";
    switch (iconName) {
        case 'clear-day':
            output = "wi-forecast-io-clear-day";
            clouds = " It's clear today!";
            break;
        case 'clear-night':
            output = "wi-forecast-io-clear-night";
            clouds = " Clear night.";
            break;
        case  'rain':
            output = "wi-forecast-io-rain";
            clouds = " <b>Rain</b> today";
            break;
        case  'snow':
            output = "wi-forecast-io-snow text-warning";
            clouds = " <b>Snow</b> today.";
            break;
        case 'sleet':
            output = "wi-forecast-io-sleet  text-danger";
            clouds = " <b>Rain:</b> Sleet";
            break;
        case 'strong-wind':
            output = "wi-forecast-io-wind  text-danger";
            clouds = " <b>Strong winds!</b>";
            break;
        case 'fog':
            output = "wi-forecast-io-fog text-warning";
            clouds = "<b>Caution:</b> Foggy";
            break;
        case 'cloudy':
            output = "wi-forecast-io-cloudy";
            clouds = " <b>Clouds:</b> Cloudy.";
            break;
        case 'day-cloudy':
            output = "wi-forecast-io-partly-cloudy-day";
            clouds = "<b>Clouds:</b> Cloudy day.";
            break;
        case 'partly-cloudy-day':
            output = "wi-forecast-io-partly-cloudy-day";
            clouds = " <b>Clouds:</b> Partly cloudy.";
            break;
        case 'night-cloudy':
            output = "wi-forecast-io-partly-cloudy-night";
            clouds = "<b>Clouds:</b> Cloudy night.";
            break;
        case 'hail':
            output = "wi-forecast-io-hail text-danger";
            clouds = " <b>Rain:</b> Hail";
            break;
        case 'thunderstorm':
            output = "wi-forecast-io-thunderstorm text-danger";
            clouds = "<b>Thunderstorm Warning</b>";
            break;
        case 'tornado':
            output = "wi-forecast-io-tornado text-danger";
            clouds = "<b>TORNADO WARNING</b>"
            break;
        case 'default':
            output = "d-none";
            break;
    }
    return "<i class=\"wi " + output + "\">"+ clouds +"</i>";
}

// *******************************************************
// Converts UNIX Time Stamp to Human readable
function timeConvert(unixTime) {
    var dateObject = new Date(unixTime * 1000);
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return dateObject.toLocaleDateString("en-US", options);
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

});
// If metric is selected we convert temperatures and wind to celsius and kilometers
$("#metricTemp").click(function () {

});


// ******************************************************************************************************
// ************* WEATHER BUILD **************************************************************************

// TODAY'S FORECAST - [0]
// Gets all the appropriate data to display the weather forecasts, adjust styling responsively.
// DAILY temp high and low[x].. icon[ ] .. clouds:[ ] .. humidity[ ].. wind speed[ ] .. pressure[ ] ..


function cardBuilder(number) {

    var getPath = data.daily.data[0];
    var theDate = timeConvert(getPath.time);
    var theSummary = getPath.summary;
    return theDate;


}


// This is the Standard get without conversions then refreshes the box
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!


// This calls the same as standard but with some fahrenheit to celsius conversions then refreshes the box
// function pullWeatherMetric(i) {
//     var classDay = "#" + i + "-weatherBox";
//     $.get(urlBuilder(lat, lng)).done(function (data) {
//         var hi = data.daily.data[i].temperatureHigh;
//         var low = data.daily.data[i].temperatureLow;
//         var windBear = data.daily.data[i].windbearing;
//         var tempInCelsiusHi = fToC(hi);
//         var tempInCelsiusLow = fToC(low);
//         $('#dayZero-weatherBox').empty().append(tempInCelsiusHi + " | " + tempInCelsiusLow + "<span>\xB0C</span>" +
//         "<br>" +
//         iconPull(data.daily.data[i].icon) +
//         "<br>" +
//         getCardinal(windBear)
//             );
//     });
//     getMetaData();
// }

// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!
// TODO: make the weather api call and DOM all one funciton !!!!


// Sandboxing


