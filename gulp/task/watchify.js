var gulp = require('gulp')
var browserify = require('./browserify')

gulp.task('watchify', function () {
  return browserify(true)
})
