var gulp = require('gulp')
var bump = require('gulp-bump')
var config = require('config').gulp

gulp.task('bump', function () {
  return gulp.src(config.src.pkg)
    .pipe(bump())
    .pipe(gulp.dest(config.dist.pkg))
})
