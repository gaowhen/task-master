var path = require('path')
var glob = require('globby')
var config = require('config').gulp
var webpack = require('webpack')

function getEntries() {
  var map = {}
  var fileList = glob.sync([
    './static/script/**/*.js',
    '!./static/script/lib/**/*.js',
  ])

  fileList.forEach(function(file) {
    var name = path.basename(file)
    var filePath = path.relative(config.src.js, file)

    if (name.match(/^[^_](.+)\.js$/)) {
      map[filePath] = file
    }
  })

  return map
}

module.exports = {
  context: __dirname,
  entry: getEntries(),
  output: {
    path: config.dist.webpack,
    filename: '[name]',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true,
        },
      },
    ],
  },
  devtool: '#inline-source-map',
  externals: {
    jquery: '$',
    react: 'React',
  },
}
