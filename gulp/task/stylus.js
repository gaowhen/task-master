var gulp = require('gulp');
var nib = require('nib');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var config = require('config').gulp;
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano')
var size = require('gulp-filesize')

gulp.task('stylus', function () {
  return gulp.src(config.src.css + '/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(size())
    .pipe(stylus({use: [nib(), jeet()], 'include css': true}))
    .pipe(cssnano())
    .pipe(size())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.css));
});
