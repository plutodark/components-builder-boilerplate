const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 3000;
module.exports = {
  mode: 'development',
  output: {
    filename: 'dev/[name].js'
  },
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/AcDaily.html'
    }),
    new Dotenv({
      path: './env/env_development'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};
