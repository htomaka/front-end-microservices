/**
 * Created by htomaka on 04/08/17.
 */
const path = require ('path');
const webpack = require ('webpack');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
        vendors: ['angular', 'micro-app-1']
    },
    output: {
        filename: '[name].js',
        path: path.resolve (__dirname, 'dist')
    },
    module: {
        noParse: /microApp1/,
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
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
    resolve: {
        alias: {
            'angular': 'angular',
            'window.angular':'angular'
        }
    },
    plugins: [
        new HTMLWebpackPlugin ({
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin ({
            name: "vendors",
            minChunks: Infinity,
        })
    ],
};
