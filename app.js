const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if(!address){
  console.log("Please provide an address");
} else {
  geocode(address, (error, {latitude, longitude, label} = {}) => {
    if(error){
      return console.log('Error', error);
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log('Error', error);
      }
      console.log(label);
      console.log(forecastData);
    })
  
  }) 
}





