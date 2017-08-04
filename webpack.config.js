/**
 * Created by htomaka on 04/08/17.
 */
const path = require ('path');
const webpack = require ('webpack');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
        vendors: ['angular']
    },
    output: {
        filename: '[name].js',
        path: path.resolve (__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin ({
            title: 'Micro frontend',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin ({
            name: 'common' // Specify the common bundle's name.
        })
    ],
};
