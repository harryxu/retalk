var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var isdev = env == 'development';


module.exports = {
    entry: {
        app: isdev ? [
            'webpack-dev-server/client?http://localhost:8100',
            'webpack/hot/only-dev-server',
            './src/index'
        ] : './src/index',

        vendor: [
            'babel-polyfill',
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
        path: path.join(__dirname, '../public/js'),
        filename: 'app.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    }
};
