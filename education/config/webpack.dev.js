const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfiguration = {
    mode: "development",
    devServer: {
        port: '8082',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development'),
        }),
        new ModuleFederationPlugin({
            name: 'education',
            filename: 'remoteEntry.js',
            shared: deps,
            exposes: {
                './EducationIndex': './src/bootstrap'
            }
        })
    ]
}

module.exports = merge(common, devConfiguration);