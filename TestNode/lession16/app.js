// var fs = require('fs')

// var rs = fs.createReadStream(src)
// rs.on('data', function (chunk) {
//     rs.pause()
//     doSomething(chunk, function () {
//         rs.resume()
//     })
// })
// rs.on('end', function () {
//     cleanUp()
// })
var http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    req.on('data', function (chunk) {
        res.write(chunk)
    })
    req.on('end', function () {
        res.end()
    })
}).listen(3000)
