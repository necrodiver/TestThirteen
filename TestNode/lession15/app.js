var http = require('http')
var server = http.createServer(requestHandler)

var middlewares = [
    function fun1(req, res, next) {
        parseBody(req, function (err, body) {
            if (err) return next(err)
            req.body = body
            next()
        })
    },
    function fun2(req, res, next) {
        checkIdInDatabase(req.body.id, function (err, rows) {
            if (err) return next(err)
            res.dbResult = rows
            next()
        })
    },
    function fun3(req, res, next) {
        if (res.dbResult && res.dbResult.length > 0) {
            res.end('true')
        } else {
            res.end('false')
        }
        next()
    }
]
function requestHandler(req, res) {
    var i = 0
    function next(err) {
        if (err) {
            return res.end('error:', err.toString())
        }
        if (i < middlewares.length) {
            middlewares[i++](req, res, next)
        } else {
            return
        }
    }
    next()
}
server.listen(3000);
