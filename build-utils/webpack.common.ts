const commonPaths = require('./common-paths')

const entry = {
  AcDaily: `${commonPaths.appEntry}/entries/AcDaily.tsx`,
  Citaa: `${commonPaths.appEntry}/entries/Citaa.tsx`
}
module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      src: commonPaths.appEntry,
    },
    extensions: ["", ".tsx", ".ts", ".js"],
  },
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
  }
}
