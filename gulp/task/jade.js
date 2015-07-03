var gulp = require('gulp')
var config = require('config').gulp
var jade = require('gulp-jade')
 
gulp.task('jade', function() {
  gulp.src(config.src.view + '/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest(config.dist.view))
})