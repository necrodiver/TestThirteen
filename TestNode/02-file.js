var http = require('http')
var readFile = require('./02-fileRead')
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
    } else if (url === '/home') {
        req.write('<strong>Welcome Home Page Start!</strong><br>')
        req.write('<img src="ha-ha" width="200" /><br>')
        req.end('<strong>Welcome Home Page End!</strong>')
    } else if (url === '/ha-ha') {
        req.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        req.end(readFile('./img/6.jpg'))
    } else {
        req.end()
    }

}).listen(3001)
console.log('listen to server:http://localhost:3001')
