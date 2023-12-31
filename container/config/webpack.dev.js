const webpack = require('webpack');
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require('webpack').container;
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfiguration = {
    mode: "development",
    devServer: {
        port: '8080',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            shared: deps,
            remotes: {
                'objective': 'objective@http://localhost:8081/remoteEntry.js',
                'education': 'education@http://localhost:8082/remoteEntry.js',
                'experience': 'experience@http://localhost:8083/remoteEntry.js',
                'skills': 'skills@http://localhost:8084/remoteEntry.js',
            }
        })
    ]
}

module.exports = merge(common, devConfiguration);