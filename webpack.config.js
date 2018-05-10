const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  }

};