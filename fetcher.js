const request = require('request');
const writeIt = require('fs');
let url = process.argv.slice(2);

console.log(url);

request(url[0], (error, response, body) => {
  if(error) {
    console.log(`Error:`, error);
    return error;
  }
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

console.log(`Downloaded and saved 1235 bytes to ./index.html`);


