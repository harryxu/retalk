var webpack = require('webpack');
var path = require('path');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
    entry: {
        app: './src/index',
        vendor: [
            'history',
            'react',
            'react-dom',
            'redux',
            'redux-thunk',
            'react-redux',
            'react-router',
            'react-router-redux',
            'remarkable'
        ]
    },

    output: {
        filename: 'app.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};
