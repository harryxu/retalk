var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
    entry: "./src/main",

    output: {
        filename: "app.js"
    },

    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        root: [
            path.resolve('./src')
        ]
    },

    postcss: [
        require('autoprefixer'),
        require('postcss-nested')
    ]
};
