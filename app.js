const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=13636%203rd%20Ave%20NE%20Seattle',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
});