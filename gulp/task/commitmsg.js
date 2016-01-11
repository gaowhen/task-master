var config = require('config').gulp
var gulp = require('gulp')
var symlink = require('gulp-symlink')

function commitmsg() {
  return gulp.src([config.src.commitmsg])
    .pipe(symlink(function() {
      return new symlink.File({
        cwd: process.cwd(),
        path: '.git/hooks/commit-msg'
      })
    }, {
      force: true
    }))
}

gulp.task('commitmsg', commitmsg)
