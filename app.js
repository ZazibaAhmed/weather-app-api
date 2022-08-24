const request = require('request');

const ACCESS_KEY = 'b3ac6908496a32bf09cf6dd4f4d04b35'
const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=37.8267,-122.4233`

request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);
  console.log(data.current)
});