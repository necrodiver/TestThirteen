var http = require('http')
var net = require('net')
http.globalAgent.maxSockets = 10000
net.createServer(function (conn) {
    conn.on('data', function (data) {
        console.log('hello world,测试一下')
        console.log(data)
        conn.write([
            'HTTP/1.1 200 ok',
            'Content-Type:text/plain',
            'Content-Length:11',
            '',
            'Hello World'
        ].join('\n'))
    })
}).listen(3000)
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     req.on('data', function (chunck) {
//         res.write(chunck)
//     })
//     req.on('end', function () {
//         res.end()
//     })
// }).listen(3000)

// http.get('http://www.example.com/', function (response) {
//     var body = [];

//     console.log(response.statusCode);
//     console.log(response.headers);

//     response.on('data', function (chunk) {
//         body.push(chunk);
//     });

//     response.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
// });
// http.get('http://wwww.example.com/', function (res) {
//     var body = []
//     console.log(res.statusCode)
//     console.log(res.headers)

//     res.on('data', function (chunk) {
//         body.push(chunk)
//     })
//     res.on('end', function () {
//         body = Buffer.concat(body)
//         console.log(body.toString())
//     })
// })

