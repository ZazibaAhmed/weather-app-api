const request = require('request');

const ACCESS_KEY = 'b3ac6908496a32bf09cf6dd4f4d04b35'
const weatherUrl = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=37.8267,-122.4233`
 
// request({url: weatherUrl, json: true}, (error, response, body) => {
//   if(error){
//     console.log("Unable to connect to weather service");
//   }else if (body.error){
//     console.log(body.error.info);
//   }else{
//     const temp = body.current.temperature;
//     const apparentTemp = body.current.feelslike;
//     console.log( body.current.weather_descriptions[0]+ 
//       `. It is currently ${temp} degree. It feels like ${apparentTemp}`)
//   }
// });

// Geocoding

const geocoding_key = '3c25e33a6e39b3ad7ea667d04dca21e6'
const address = 'Los Angeles'
const geocodingUrl = `http://api.positionstack.com/v1/forward?access_key=${geocoding_key}&query=${address}`

request({url: geocodingUrl, json: true}, (error, response, body) => {
  if(error){
    console.log("Unable to connect to geocoding");
  }else if (body.error) {
    console.log(body.error.message)
  }else if (body.data.length === 0){
    console.log('Could not find location');
  }else{
    const latitude = body.data[0].latitude;
    const longitude = body.data[0].longitude;
    console.log(latitude, longitude);
  }

});