var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/myModule.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            inject: false,
            filename: 'index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            /*{
                test: /\.css$/,
                loader: "style!css"
            },*/
            {
                test: /\.tpl\.html$/,
                loader: 'ng-cache'
            }
        ]
    }
};