var gulp = require('gulp')
var config = require('config').gulp
var cache = require('gulp-cached')

gulp.task('webpack', function() {
  return gulp.src([
      config.dist.webpack + '/**/*.js',
    ])
   .pipe(cache())
   .pipe(gulp.dest(config.dist.js))
})
