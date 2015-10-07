/*var http = require('http'),
    fs = require('fs'),
    url = require('url');


var http = require('http');
var port= Number(process.env.PORT || 3000)
http.createServer(function(req, res) {
    //var variable= {"name":"apples","desc":"delicious"
    //}
    fs.readFile('somefile.json', function(err, file) {
        var object;
        console.log("file read");
        if (err) {
            alert("error");
        }
        object=file;
        res.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
        res.write(object);
        res.end();
    });
}).listen(port,"http://localhost");
console.log("server initialized");*/
var http = require("http");
var fs = require("fs");

//We will send them a 404 response if page doesn't exist
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found");
    response.end();
}

//Handle their request
function onRequest(request, response) {

    if( request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {"Content-Type": "text/html"});
        //Open file as readable stream, pipe stream to response object
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
