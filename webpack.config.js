const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/blog/index.html',
            filename: 'blog/index.html'
        }),
        new copyPlugin([
            {from: 'src/assets/', to: 'assets'},
            {from: 'src/css/', to: 'css'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?modules'],
            },
        ],
    },
};
