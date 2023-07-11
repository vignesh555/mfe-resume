const webpack = require('webpack');
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require('webpack').container;
const common = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfiguration = {
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        port: '8080',
        historyApiFallback: {
            index: 'index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
            '/static/fonts/Kalam-Regular.ttf': {
              target: 'http://localhost:8085',
              changeOrigin: true,
            },
        },
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
                'common': 'common@http://localhost:8085/remoteEntry.js',
            }
        })
    ]
}

module.exports = merge(common, devConfiguration);