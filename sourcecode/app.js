
var http = require('http');
var fs = require('fs');
var port = 1337, host = '127.0.0.1';
var server = http.createServer(function(request, response)
{
	var urlRequest = request.url;
	console.log('Received request: ' + urlRequest);
	/*var filePath = './public' + urlRequest;
	fs.readFile(filePath, function(error, data){
		if(error){
			response.writeHead(400, {'Content-type': 'text/plain'});
			response.end(“Sorry, The page not found”);
		}
		else{
			response.writeHead(200, {'Content-type': 'text/plain'});
			response.write(data);
			response.end();
		}
	});*/
	response.writeHead(200, {'Content-type': 'text/plain'});

	response.end('Doan duc thanh');
});

server.listen(port, host, function(){
var address = server.address();
console.log('opened server on %j', address);

});
