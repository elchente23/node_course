const yargs = require("yargs"),
      axios = require("axios"),
      geocode = require("./geocode/geocode"),
      weather = require("./weather/weather");

const argsv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodeAddress = encodeURIComponent(argsv.address),
      geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
    
axios.get(geocodeUrl).then((response) => {
    if(response.data.status == "ZERO_RESULTS"){
        throw new Error('Unable to  find address');
    }

    let lat = response.data.results[0].geometry.location.lat,
        lng = response.data.results[0].geometry.location.lng,
        weatherUrl = `https://api.darksky.net/forecast/5e20bc440edf48bb63940f12c74b2f9e/${lat},${lng}`;

    return axios.get(weatherUrl);

}).then((response) => {
    let temperature = (response.data.currently.temperature - 32) / 1.8,
        apparentTemperature = (response.data.currently.apparentTemperature - 32) /1.8;

    console.log(`It's currently ${temperature}. It feels ${apparentTemperature}`);
}).catch((e) => {
    if(e.code == "ENOTFOUND"){
        console.log("Unable to connect to API server");
    } else {
        console.log(e.message);
    }
});