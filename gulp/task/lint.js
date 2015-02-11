/**
 * Created by gaowhen on 15/1/15.
 */

var config = require('config').gulp;
var gulp = require('gulp');
var jshint = require('gulp-jshint');

function lint() {
  return gulp.src([
    config.src.js + '/**/*.js'
  ])
    .pipe(jshint(config.src.jshintrc))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}

gulp.task('lint', lint);

module.exports = lint;