const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/564cf250ff4dcac557ed6fdb50e297f4/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to DarkSky API');
        } else if (response.statusCode === 400) {
            callback('Bad request');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                actualTemp: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;

// lat, long

// const api_key = 564cf250ff4dcac557ed6fdb50e297f4

// https://api.darksky.net/forecast/564cf250ff4dcac557ed6fdb50e297f4/37.3867324,-121.8776299

