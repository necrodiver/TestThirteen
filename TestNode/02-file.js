var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request', function (res, req) {
    var url = res.url.toLocaleLowerCase()
    console.log(url)
    req.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    if (url === '/') {
        req.end('<strong>Hello World!</strong>')
    } else if (url === '/favicon.ico') {
        req.end()
    } else if (url === '/home'){
        req.end('<strong>Welcome Home Page!</strong>')
    }else{
        req.end()
    }

}).listen(3001)
console.log('listen to server:http://localhost:3001')
