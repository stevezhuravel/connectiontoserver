var http = require('http');

var server = http.createServer(function(req, res){
  // getting a requesting to create server from http
  res.writeHead(200, {"Content-Type" : 'text/plan'});
  res.end("learning javascript to connect to serve..." +
" \n will connect a webstie to host on a local server");

});
// this is what will be displayed on the ip address when it is runned 
server.listen(3000, '127.0.0.1');
console.log('The server is running at http://127.0.0.1:3000');
// the local host ip address
