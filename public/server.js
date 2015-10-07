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


function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found");
    response.end();
}


function onRequest(request, response) {

    if( request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {"Content-Type": "text/html"});
        
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(3000);

