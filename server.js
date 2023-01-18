// Import http library
const http = require('http');
// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 7070;
//create our server object
const server = http.createServer();
// We define a function that runs in response a request event
server.on('request', (request, response) => {
  // handle request based on method then URL
  response.statusCode = 200;
  response.write('Amahoro World');
  response.end();
});
// get the server to start listening
server.listen(PORT, (err) => {
  // error checking
  err ? console.error(err) : console.log(`ndi live kuri ${PORT}`);
});
