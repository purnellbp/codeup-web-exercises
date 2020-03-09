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
        buildCards();

    }, 2000);

});

// $('#day0').on('
// ******************************************************************************************************
// ************* WEATHER BUILD **************************************************************************

// TODAY'S FORECAST - [0]
// Gets all the appropriate data to display the weather forecasts, adjust styling responsively.
// DAILY temp high and low[x].. icon[ ] .. clouds:[ ] .. humidity[ ].. wind speed[ ] .. pressure[ ] ..
// Call dark sky api
var lat = 29.43527668266067;
var lng = -98.49656525346037;
var theCenter = [lng, lat];
var corsURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"

var tempSwitch = 0;

function darkURL(lat, lng) {
    var newCoords = lat + "," + lng;

    return corsURL + darkSkysKey + "/" + newCoords;
}

$('#coordinates').on(function () {
    console.log("hello");
});
// Forecast cards
function buildCards() {


    $.get(darkURL(lat, lng))
        .done(function (data) {
            var dataLength = data.daily.data.length;
            // Config Dates and times
            // Temperature Unit Selection
            // ID faraSelector and ID celsiusSelector | toggle
            $('#unitSelector').click(function () {

            });

            // Build Start
            for (var i = 0; i < dataLength; i++) {
                var dayA = data.daily.data[i];
                var thisCard = "#day" + i;
                var cardHeader = '#cardHeader' + i;
                var cardBody = '#cardBody' + i;
                var dayDisplay = timeConvert(dayA.time).format('l');

                // degrees stuff = "\xB0F"  "\xB0C"
                var tempHigh = dayA.temperatureHigh.toFixed(0);
                var tempLow = dayA.temperatureLow.toFixed(0);
                if (tempSwitch === 1) {
                    tempHigh = fToC(dayA.temperatureHigh).toFixed(0);
                    tempLow = fToC(dayA.temperatureLow).toFixed(0);
                }
                var summaryDisplay = iconPull(dayA.icon) + capitalizeFirstLetter(dayA.precipType);
                var degreesSwitch = "<div><span id='unitSelector'><small id='faraSelector' class=' font-weight-bold'>\xB0F</small> | <small id='celsiusSelector'>\xB0C</small></span></div></div>"
                // js animations


                    // Card Build
                    $(thisCard).empty()
                    .append("<div id='cardHeader" + i + "' class='card-header border-none p-1 font-weight-bold' > " + dayDisplay + "</div>")


                    .append("<div id='cardBody" + i + "' class='card-body p-1 '><p class='card-text'>" + summaryDisplay + "</p></div>")


                    .append("<div class='card-footer border-none p-1'>Footer</div></div>");





            } // end FOR loop
        }); // End get.done
}



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
        center: theCenter,
        zoom: 9,
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
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        return  lngLat.lat + "," + lngLat.lng;
    }

    marker.on('dragend', onDragEnd);
    map.on('click', 'dragend', function(e) {
        map.flyTo({ center: e.features[0].geometry.coordinates });
    });

};
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
            output = "wi-forecast-io-snow text-warning";
            break;
        case 'sleet':
            output = "wi-forecast-io-sleet  text-danger";
            break;
        case 'strong-wind':
            output = "wi-forecast-io-wind  text-danger";
            break;
        case 'fog':
            output = "wi-forecast-io-fog text-warning";
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
            output = "wi-forecast-io-hail text-danger";
            break;
        case 'thunderstorm':
            output = "wi-forecast-io-thunderstorm text-danger";
            break;
        case 'tornado':
            output = "wi-forecast-io-tornado text-danger";
            break;
        case 'default':
            output = "d-none";
            break;
    }
    return "<i class=\"wi " + output + "\"></i>";
}

// Converts UNIX Time Stamp to Human readable
// Date handling borrowed from https://github.com/jacwright/date.format
function timeConvert(unixTime) {
    return new Date(unixTime * 1000);
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

// Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ******************************************************************************************************
// ************* LISTENERS ******************************************************************************
// If the Fahrenheit option is selected we pull the standard API results
$("#mericanTemp").click(function () {

});
// If metric is selected we convert temperatures and wind to celsius and kilometers
$("#metricTemp").click(function () {

});





