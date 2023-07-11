const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfiguration = {
    mode: "development",
    devServer: {
        port: '8085',
        historyApiFallback: {
            index: 'index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development'),
            DOMAIN_URL: JSON.stringify('http://localhost:8085'),
        }),
        new ModuleFederationPlugin({
            name: 'common',
            filename: 'remoteEntry.js',
            shared: deps,
            exposes: {
                './CommonIndex': './src/bootstrap'
            }
        })
    ]
}

module.exports = merge(common, devConfiguration);