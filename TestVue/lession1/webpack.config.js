module.exports = {
    entry: {
        'index': './vue/index/main.js',
    },
    output: {
        path: './public/bulid',
        filename: '[filename].js' // 可以多点切入
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: vue.withLoaders({
                    js: 'babel?optional[]=runtime'
                })
            },
            { test: /\.scss$/, loader: 'style!css!sass },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    resolve: { // 解决 npm 的依赖问题
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json']
    },
}