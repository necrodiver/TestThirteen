var benchmark = require('benchmark')
var suite = new benchmark.Suite;
var number = '100'
var int1 = function (str) {
    return +str
}
var int2 = function (str) {
    return parseInt(str, 10)
}
var int3 = function (str) {
    return Number(str)
}

suite
    .add('+', function () {
        int1(number)
    })
    .add('parseInt', function () {
        int2(number)
    })
    .add('Number', function () {
        int3(number)
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .run({ 'async': true })
