var webpack = require('webpack');

module.exports = {
    entry:{
        main:'./static/js/index.js'
    },
    output:{
        filename: './bundle.[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            // exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};