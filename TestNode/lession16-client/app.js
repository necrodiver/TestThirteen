var http = require('http')
var net = require('net')

var options = {
    port: 3000,
    host: 'localhost'
};

var client = net.connect(options, function () {
    client.write([
        'GET / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.baidu.com',
        'Accept: */*',
        '',
        ''
    ].join('\n'));
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});
// var options = {
//     hostname: 'www.example.com',
//     port: 3000,
//     path: '/upload',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// };

// var request = http.request(options, function (response) { });

// request.write('Hello World');
// request.end();