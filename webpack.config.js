const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var webpackConfig = {
    entry: {
        main: './src/main.ts'
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader', 'css-loader',
                ],
            },
        ]
    },

    stats: { children: false },
};
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/favicon.ico'
});
webpackConfig.plugins = [
    htmlWebpackPlugin,
];
module.exports = webpackConfig;