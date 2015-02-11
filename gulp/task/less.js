var gulp = require('gulp');
var less = require('gulp-less');
var config = require('config').gulp;
var sourcemaps = require('gulp-sourcemaps');

function compile() {
  gulp.src(config.src.css + '/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.css));
}

gulp.task('less', compile);

module.exports = compile;