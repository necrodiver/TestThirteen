var fs = require('fs')
var Q = require('q')
var defer = Q.defer()

function printFileContent(fileName) {
    return function () {
        var defer = Q.defer()
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (!err && data) {
                console.log(data)
                defer.resolve()
            }
        })
        return defer.promise
    }
}
printFileContent('test1.log')()
    .then(printFileContent('test2.log'))
    .then(printFileContent('test3.log'))
    .then(printFileContent('test4.log'))