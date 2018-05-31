const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    stats: 'verbose',
    entry: [
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Router v4 Test',
            template: './src/index.html',
        }),
        new HotModuleReplacementPlugin()
    ]
};
