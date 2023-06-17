const DotenvProd = require('dotenv-webpack')
module.exports = {
  mode: 'production',
  output: {
    filename: '[name].js'
  },
  devtool: false,
  plugins: [
    new DotenvProd({
      path: './env/env_development'
    }),
  ],
}
