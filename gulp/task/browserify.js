var gulp = require('gulp');
var config = require('config').gulp;
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var transform = require('vinyl-transform');

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);

    return b.bundle();
  });

  return gulp.src([config.src.js + '/**/*.js'])
    .pipe(browserified)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.js));
});