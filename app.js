var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  //For LiveReload
  res.write("<script src=\"http://localhost:35729/livereload.js\"></script>");

  res.end('Hello World\n');
}).listen(3000);
console.log('Server running');
