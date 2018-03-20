const yargs = require("yargs"),
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

geocode.geocodeAddress(argsv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);

        weather.getWeather(results.latitud,results.longitud, (errorMessage, results) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${results.temperature}, it feels like ${results.apparentTemperature}`);
            }
        });
    }
});

