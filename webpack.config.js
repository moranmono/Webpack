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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my web pack plugin',
            templateContent: '<div id="root"></div>'
        })
    ]
}