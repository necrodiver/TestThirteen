var http = require('http')
var service = http.createServer()
service.on('request', function (res, req) {
    var url = res.url
    req.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    console.log(res.url)
    if (url === '/') {
        req.end('<strong>这是主页</strong>')
    } 
    else if(url==='/qiutao'){
        req.end("<strong>这就是TT的首页</strong>") 
    }else if(url==='/wusi'){
        req.end("<strong>这就是SS的首页</strong>") 
    }else if(url==='/liqiyu'){
        req.end("<strong>这就是YY的首页</strong>") 
    }else if(url==='/caixiaobo'){
        req.end("<strong>这就是BB的首页</strong>") 
    }
    else{
        req.end('<br/><strong>hello world!</strong>')
    }
})
service.listen(3000, function () {
    console.log('listen open the url:http:localhost:3000')
})