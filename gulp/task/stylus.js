var gulp = require('gulp');
var nib = require('nib');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var config = require('config').gulp;
var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus', function () {
  return gulp.src(config.src.css + '/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({use: [nib(), jeet()], 'include css': true}))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.css));
});