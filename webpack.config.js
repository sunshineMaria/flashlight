var webpack = require('webpack');

module.exports = {
    entry: {
        main: './static/js/src/index.js'
    },
    output: {
        path: './static/js/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?cacheDirectory&presets[]=es2015'
        }]
    }
};