var http = require('http');

var server = http.createServer(function(req, res){
  // getting  request to create an http server 
  res.writeHead(200, {"Content-Type" : 'text/plan'});

  res.end("learning javascript to connect to server...");
    // what you see when you open up the ip address 
});
server.listen(3000, '127.0.0.1');\

console.log('The server is running at http://127.0.0.1:3000');
// local server ip address that runs on your computer 
