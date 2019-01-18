// const fs = require('fs');
// const http = require('http');
// //use readFileSync
// http.createServer(function(req,res){
// 	var readFileSync = fs.readFileSync(
// 		__dirname + 'XXX.txt','utf-8'
// 		);
// 	res.end(readFileSync);
// }).listen(8080);
// //use readFile
// http.createServer(function(req,res){
// 	var readFile = fs.readFile(
// 		__dirname + 'XXX.txt','utf-8',
// 		res.end(readFile)
// 		);
// }).listen(8080);
// //use stream
// http.createServer(function(req,res){
// 	var stream = fs.createReadStream('XXX.txt').pipe(res);
// });
var http = require('http');
var fs = require('fs');
// Asynchronous image loading using pipe - Best Way for performance
http.createServer(function(req,res){
    var rs = fs.createReadStream(__dirname + '/image.jpg').pipe(res);
}).listen(3000);

// Synchronous image loading using buffer
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/image.jpg');
    res.end(image);
}).listen(8080);
// Asynchronous image loading using buffer
http.createServer(function(req,res){
    var rs = fs.readFile(__dirname + '/image.jpg',function(err,data){
        if (err) throw err;
        res.end(data);
    })
}).listen(8000);