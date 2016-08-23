var webpack = require('webpack');

module.exports = {
    entry:{
        main1:'./static/js/index.js'
    },
    output:{
        filename: './bundle.[name].js'
    },
    plugins: [
        new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])
    ]
};