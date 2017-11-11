const path = require('path')

module.exports = {
  entry: './app/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'public', 'assets')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
