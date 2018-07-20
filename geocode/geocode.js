const request = require('request');

let geocodeAddress = (address, callback) => {
    
    let your_address = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${your_address}&key=AIzaSyCC_rh9aG_8KdOV4ohVdEWa0olQB08VvcM`,
        json: true
    }, (error, response, body) => {
        // console.log(body);
        if (error) {
            callback('Unable to connect to Google API');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
});

};

module.exports.geocodeAddress = geocodeAddress;
