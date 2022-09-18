const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if(!address){
  console.log("Please provide an address");
} else {
  geocode(address, (error, data) => {
    if(error){
      return console.log('Error', error);
    }
    console.log('Data', data);
  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if(error){
        return console.log('Error', error);
      }
      console.log(data.label);
      console.log(forecastData);
    })
  
  }) 
}





