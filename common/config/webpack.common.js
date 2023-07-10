const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][ext]', // Specify the output filename and directory for fonts
                },
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'src/assets/fonts', // Source directory containing your fonts
              to: 'fonts', // Destination directory in the output (dist) folder
            },
          ],
        }),
    ],
};