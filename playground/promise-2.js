const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) =>  {
        let your_address = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${your_address}&key=AIzaSyCC_rh9aG_8KdOV4ohVdEWa0olQB08VvcM`,
            json: true
        }, (error, response, body) => {
            // console.log(body);
            // reject and resolve only takes one argument!!
            // you cannot switch a rejected promise to a fulfilled one...??
            if (error) {
                reject ('Unable to connect to Google API');
            } else if (body.status === 'ZERO_RESULTS') {
                reject ('Unable to find address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
    });
    })
    
};

geocodeAddress('95131').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})