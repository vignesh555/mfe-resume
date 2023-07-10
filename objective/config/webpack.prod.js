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
        publicPath: '/objective/latest/'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
        }),
        new ModuleFederationPlugin({
            name: 'objective',
            filename: 'remoteEntry.js',
            shared: deps,
            exposes: {
                './ObjectiveIndex': './src/bootstrap'
            },
            remotes: {
                'common': `common@${domain}/common/latest/remoteEntry.js`,
            }
        })
    ]
}

module.exports = merge(common, productionConfiguration);
