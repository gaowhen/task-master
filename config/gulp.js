var path = require('path');

var src = {
  path: path.resolve(__dirname, '../static'),
  js: path.resolve(__dirname, '../static/script'),
  css: path.resolve(__dirname, '../static/css'),
  img: path.resolve(__dirname, '../static/img'),
  jshintrc: path.resolve(__dirname, '../.jshintrc'),
  precommit: path.resolve(__dirname, '../.pre-commit'),
  git: path.resolve(__dirname, '../.git')
};

var dist = {
  path: path.resolve(__dirname, '../dist'),
  js: path.resolve(__dirname, '../dist/script'),
  css: path.resolve(__dirname, '../dist/css'),
  img: path.resolve(__dirname, '../dist/img')
};

var config = {
  src: src,
  dist: dist
};

module.exports = config;