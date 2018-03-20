const request = require("request");

let geocodeAddress = (address, callback) =>{

    const encodeAddress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    }, (error, response, body) => {
    
        if(error) {
            callback('Unable to connect to Google servers');
        } else if(body.status == 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if(body.status == 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitud: body.results[0].geometry.location.lat,
                longitud: body.results[0].geometry.location.lng
            });
        } 
    });
//5e20bc440edf48bb63940f12c74b2f9e
};

module.exports = { 
    geocodeAddress
};