const request = require("request");

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) =>{
        const encodeAddress = encodeURIComponent(address);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json: true
        }, (error, response, body) => {
        
            if(error) {
                reject('Unable to connect to Google servers');
            } else if(body.status == 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if(body.status == 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitud: body.results[0].geometry.location.lat,
                    longitud: body.results[0].geometry.location.lng
                });
            } 
        });
    })
};

geocodeAddress('80143').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});