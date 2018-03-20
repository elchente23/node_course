const request = require("request");

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/5e20bc440edf48bb63940f12c74b2f9e/${lat},${lng}`,
        json: true    
    }, (error, response, body) => {
        if(error){
            callback("Unable to connect to Forecast.io server");
        } else if(body.code == 400){
            callback("Unable to fetch wheater");
        } else {
            callback(undefined, {
                temperature: (body.currently.temperature - 32) / 1.8,
                apparentTemperature: (body.currently.apparentTemperature - 32) / 1.8
            });
        }
    });
};

module.exports.getWeather = getWeather;