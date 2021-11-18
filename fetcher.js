const request = require('request');
const fs = require('fs');
let url = process.argv.slice(2);
//function that writes a given website to a given file location
request(url[0], (error, response, body) => {
  if (error) {
    console.log(`Error:`, error);
    return error;
  }
  //if a local url exists, writes body of website to new file
  if (url[1]) {
    fs.writeFile(url[1], body, 'utf8', (error) => {
      //if cannot write, displays error message
      if (error) return console.log(error);
    });
    let fileSize = body.length;
    console.log(`Downloaded and saved ${fileSize} bytes to ${url[1]}`);
  }
});


