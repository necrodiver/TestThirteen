// var fibonacci = function (n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

// if(require.main===modules){
//     var n=Number(process.argv[2]);
//     console.log('fibonacci(' + n + ') is', fibonacci(n));
// }

var fibonacci = function (n) {
    console.log('fibonacci方法内部star')
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }
    if (n < 0) {
        throw new Error('n should >= 0')
    }
    if (n > 10) {
        throw new Error('n should <= 10');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

exports.fibonacciaa = fibonacci;//在这这个传值没用到

if (require.main === module) {
    console.log('require.main === module判断前')
    console.log(process.argv[2]);
    var n = Number(process.argv[2]);

    console.log('fibonacci(' + n + ') is', fibonacci(n));
}