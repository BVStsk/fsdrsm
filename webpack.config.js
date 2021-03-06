const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname)
};

module.exports = merge([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.source + '/index.pug',
            })
        ]
    },
    pug(),
    sass()
])
