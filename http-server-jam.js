var http = require('http');
const a = '127.0.0.1';
http.createServer(function (request,response){
    response.writeHead(200, {'Content-type' : 'text/plain'});
    response.end('Hello Colo\n');
}).listen(8124, a);
console.log('Server started colo',a);