//对js进行存储在localStorage中
var scriptUrl = '/Scripts/test.js'
    (function ($) {
        $.getXStorage = function (key) {
            return getTemStorage(key + '_' + baseConfig[key].version)
        },
            $.setXStorage = function (key, value) {
                setTemStorage(key + '_' + baseConfig[key].version, value)
            },
            $.removeXStorage = function (key) {
                for (var i = 0; i < baseConfig[key].version; i++) {
                    var _key = baseConfig[key].test + '_' + i
                    removeTemStorage(_key)
                }
            }
    })(jQuery)

var baseConfig = {
    test: {
        version: 1,
        remark: '此方法用于弹出一个提示框'
    }
}
var Config = {
    test: 'test'
}

function Load() {
    var script = $.getXStorage(Config.test);
    if (script) {
        $('head').append('<script>' + script + '<\/script>')
        t()
    } else {
        $.removeXStorage(Config.test)
        var req = $.get(scriptUrl)
        req.done(function (rd) {
            if (rd == 0) {
                console.error('获取test.js出错')
                return
            }
            var txt = String(rd)
            //成功处理
            $.setXStorage(Config.test, txt);
            $('#head').append('<script>' + txt + '<\/script>')
            t()
        })
    }
}

function t() {
    test()
}


function setTemStorage(key, value) {
    if (!window.localStorage) {
        alert("建议您使用高版本浏览器：IE8+,FireFox,Chrome")
    }

    localStorage.setItem(key, value)
}

function getTemStorage(key) {
    if (!window.localStorage) {
        alert("建议您使用高版本浏览器：IE8+,FireFox,Chrome")
    }
    var tem = localStorage.getItem(key)
    if (!tem) {
        return
    }
    return tem
}

function removeTemStorage(key) {
    if (!window.localStorage) {
        alert("建议您使用高版本浏览器：IE8+,FireFox,Chrome")
        return
    }
    localStorage.removeItem(key)
}

Load()