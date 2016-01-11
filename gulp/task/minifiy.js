var gulp = require('gulp')
var config = require('config').gulp
var less = require('gulp-less')
var cssnano = require('gulp-cssnano')
var sourcemaps = require('gulp-sourcemaps')

function compile() {
  gulp.src(config.src.css + '/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.css))
}

gulp.task('minify', compile)

module.exports = compile
