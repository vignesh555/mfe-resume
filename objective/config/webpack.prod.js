
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

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
            name: 'objective',
            filename: 'remoteEntry.js',
            shared: deps,
            exposes: {
                './ObjectiveIndex': './src/bootstrap'
            }
        })
    ]
}

module.exports = merge(common, productionConfiguration);
