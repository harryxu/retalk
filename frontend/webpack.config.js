var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
    entry: './src/index',

    output: {
        filename: 'app.js'
    },

    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },

    postcss: [
        require('autoprefixer'),
        require('postcss-nested')
    ]
};
