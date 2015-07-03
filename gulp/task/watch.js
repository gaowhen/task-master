var gulp = require('gulp');
var config = require('config').gulp;
var less = require('./less');
var less = require('./stylus');
var livereload = require('gulp-livereload');
var watchify = require('./watchify');

gulp.task('watch', function () {
  livereload.listen({
    start: true
  });

  gulp.watch(config.src.css + '/**/*.less', ['less']).on('change', livereload.changed);
  gulp.watch(config.src.css + '/**/*.styl', ['stylus']).on('change', livereload.changed);
  gulp.watch(config.src.js + '/**/*.js', ['watchify']).on('change', livereload.changed);
});
