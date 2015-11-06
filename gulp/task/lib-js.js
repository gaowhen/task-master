var gulp = require('gulp')
var include = require('gulp-include')
var config = require('config').gulp

gulp.task('libjs', function () {
  return gulp.src([
    config.src.js + '/lib/**/*.js'
  ])
    .pipe(include())
    .pipe(gulp.dest(config.dist.js + '/lib'))
})


