const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const productionConfiguration = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/education/latest/'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
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

module.exports = merge(common, productionConfiguration);
