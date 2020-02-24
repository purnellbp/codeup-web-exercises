/**********************************************
 *            SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 *            CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]


const url = 'http://api.open-notify.org/iss-now.json';


function makeMapBox() {

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('no connection');
            }
        })
        .then((json) => {

                var lat = json.iss_position.latitude;
                var lng = json.iss_position.longitude;

                mapboxgl.accessToken = mapboxToken;

                var map = new mapboxgl.Map({
                    container: 'map',
                    // style: 'mapbox://styles/mapbox/streets-v9',
                    style: 'mapbox://styles/mapbox/satellite-v9',
                    zoom: 2,
                    center: [lng, lat]
                });
            // Line data

                // Create a GeoJSON source with an empty lineString.
                var geojson = {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'LineString',
                                'coordinates': [[0, 0]]
                            }
                        }
                    ]
                };

                var speedFactor = 30; // number of frames per longitude degree
                var animation; // to store and cancel the animation
                var startTime = 0;
                var progress = 0; // progress = timestamp - startTime
                var resetTime = false; // indicator of whether time reset is needed for the animation
                var pauseButton = document.getElementById('pause');

                map.on('load', function () {
                    map.addSource('line', {
                        'type': 'geojson',
                        'data': geojson,
                        });

// add the line which will be modified in the animation
                    map.addLayer({
                        'id': 'line-animation',
                        'type': 'line',
                        'source': 'line',
                        'layout': {
                            'line-cap': 'round',
                            'line-join': 'round'
                        },
                        'paint': {
                            'line-color': '#ed6498',
                            'line-width': 5,
                            'line-opacity': 0.8
                        }
                    });

                    startTime = performance.now();

                    animateLine();

// click the button to pause or play
                    pauseButton.addEventListener('click', function () {
                        pauseButton.classList.toggle('pause');
                        if (pauseButton.classList.contains('pause')) {
                            cancelAnimationFrame(animation);
                        } else {
                            resetTime = true;
                            animateLine();
                        }
                    });

// reset startTime and progress once the tab loses or gains focus
// requestAnimationFrame also pauses on hidden tabs by default
                    document.addEventListener('visibilitychange', function () {
                        resetTime = true;
                    });

// animated in a circle as a sine wave along the map.
                    function animateLine(timestamp) {
                        if (resetTime) {
// resume previous progress
                            startTime = performance.now() - progress;
                            resetTime = false;
                        } else {
                            progress = timestamp - startTime;
                        }

// restart if it finishes a loop
                        if (progress > speedFactor * 360) {
                            startTime = timestamp;
                            geojson.features[0].geometry.coordinates = [];
                        } else {
                            var x = progress / speedFactor;
// draw a sine wave with some math.
                            var y = Math.sin((x * Math.PI) / 90) * 40;
// append new coordinates to the lineString
                            geojson.features[0].geometry.coordinates.push([x, y]);
// then update the map
                            map.getSource('line').setData(geojson);
                        }
// Request the next frame of the animation.
                        animation = requestAnimationFrame(animateLine);
                    }
                });


                // Line Data end


                function getCoords() {
                    fetch(url)
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('no connection');
                            }
                        })
                        .then((json) => {
                                var lat = json.iss_position.latitude;
                                var lng = json.iss_position.longitude;

                                var marker = new mapboxgl.Marker(markerOptions)
                                    .setLngLat([lng, lat])
                                    .addTo(map);
                            }
                        );
                    setTimeout(getCoords, 2500);
                }
                getCoords();


            }
        );
}

makeMapBox();


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 *                    MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker

var markerOptions = {
    color: "#ff0000",
    draggable: true
}


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 *                    POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.


// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"


/**********************************************
 *                    Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.


geocode("1600 Pennsylvania Ave, Washington, DC", mapboxToken)
    .then(function (result) {
});

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method







