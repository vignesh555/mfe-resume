
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const productionConfiguration = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
        }),
        new ModuleFederationPlugin({
            name: 'container',
            shared: deps,
            remotes: {
                'objective': `objective@${domain}/objective/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(common, productionConfiguration);
