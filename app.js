const request = require('request');
const geocode = require('./utils/geocode');

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

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);

})
