/**
 * Created by gaowhen on 15/1/15.
 */

var config = require('config').gulp
var gulp = require('gulp')
var jshint = require('gulp-jshint')
var argv = require('yargs').argv
var files = argv.file && argv.file.split(' ')

if (!files || files.length === 0) {
  files = config.src.js + '/**/*.js'
}

function lint() {
  return gulp.src(files)
    .pipe(jshint(config.src.jshintrc))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
}

gulp.task('lint', lint)

module.exports = lint
