const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const productionConfiguration = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/common/latest/'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
            DOMAIN_URL: JSON.stringify(domain),
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

module.exports = merge(common, productionConfiguration);
