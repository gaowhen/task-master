var path = require('path')

var src = {
  path: path.resolve(__dirname, '../static'),
  js: path.resolve(__dirname, '../static/script'),
  css: path.resolve(__dirname, '../static/css'),
  img: path.resolve(__dirname, '../static/img'),
  jshintrc: path.resolve(__dirname, '../.jshintrc'),
  precommit: path.resolve(__dirname, '../.pre-commit'),
  commitmsg: path.resolve(__dirname, '../.commit-msg.js'),
  git: path.resolve(__dirname, '../.git'),
  view: path.resolve(__dirname, '../view')
}

var dist = {
  path: path.resolve(__dirname, '../build'),
  js: path.resolve(__dirname, '../build/script'),
  css: path.resolve(__dirname, '../build/css'),
  img: path.resolve(__dirname, '../build/img'),
  view: path.resolve(__dirname, '../build/view')
}

var config = {
  src: src,
  dist: dist
}

module.exports = config
