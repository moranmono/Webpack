const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, '/public'),
        open: 'chrome'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my web pack plugin',
            templateContent: '<div id="root"></div>'
        })
    ]
}