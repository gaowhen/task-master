var config = require('config').gulp
var gulp = require('gulp')
var symlink = require('gulp-symlink')

function precommit() {
  return gulp.src([config.src.precommit])
    .pipe(symlink(function() {
      return new symlink.File({
        cwd: process.cwd(),
        path: '.git/hooks/pre-commit'
      })
    }, {
      force: true
    }))
}

gulp.task('precommit', precommit)
