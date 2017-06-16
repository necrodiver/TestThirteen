var fs = require('fs')
var Q = require('q')

function printFileContent(fileName) {
    var defer = Q.defer()
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (!err && data) {
            console.log(data)
            defer.resolve(fileName + ' success ')
        } else {
            defer.reject(fileName + ' fail ')
        }
    })
    return defer.promise;
}
// Q.all([printFileContent('test1.log'), printFileContent('test2.log'), printFileContent('test3.log'), printFileContent('test4.log')])
//     .then(function (success) {
//         console.log(success)
//     })

Q.allSettled([printFileContent('test1.log'), printFileContent('test2.log'), printFileContent('test3.log'), printFileContent('test4.log')])
    .then(function (result) {
        result.forEach(function (result) {
            console.log(result.state)
        })
    })