/**
 * Created by gaowhen on 15/1/15.
 */

var config = require('../../config/gulp');
var gulp = require('gulp');
var symlink = require('gulp-symlink');

function hook() {
  return gulp.src([config.src.precommit])
    .pipe(symlink(function() {
      return new symlink.File({
        cwd: process.cwd(),
        path: '.git/hooks/pre-commit'
      });
    }, {
      force: true
    }));
}

gulp.task('hook', hook);

module.exports = hook;
