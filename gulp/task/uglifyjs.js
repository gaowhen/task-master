/**
 * Created by hkongm on 15/4/20.
 */

var config = require('config').gulp;
var gulp = require('gulp');
var uglify = require('gulp-uglify');

function uglifyjs() {
  return gulp.src([
    config.src.js + '/**/*.js'
  ])
  .pipe(uglify({
      output: {
        ascii_only:true
      },
      compress: {
        drop_console:true
      }
    }))
  .pipe(gulp.dest(config.dist.js))
}

gulp.task('uglifyjs', uglifyjs);

module.exports = uglifyjs;


