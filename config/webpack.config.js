const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-[chunkhash:6].js',
    chunkFilename: '[name]-[chunkhash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[contenthash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/public/index.html'),
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
}
