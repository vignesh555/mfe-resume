
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require("webpack-merge");
const deps = require("../package.json").dependencies;
const common = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;
console.log('new');
console.log(domain);

const productionConfiguration = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
        }),
        new ModuleFederationPlugin({
            name: 'container',
            shared: deps,
            remotes: {
                'objective': `objective@${domain}/objective/latest/remoteEntry.js`,
                'education': `education@${domain}/education/latest/remoteEntry.js`,
                'experience': `experience@${domain}/experience/latest/remoteEntry.js`,
                'skills': `skills@${domain}/skills/latest/remoteEntry.js`,
            }
        })
    ]
}

module.exports = merge(common, productionConfiguration);
