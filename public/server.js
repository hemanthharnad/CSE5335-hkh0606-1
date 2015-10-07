var http = require('http'),
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
}).listen(port);
console.log("server initialized");
