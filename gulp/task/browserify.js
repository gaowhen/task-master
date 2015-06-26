var gulp = require('gulp');
var config = require('config').gulp;
var browserify = require('browserify');
var transform  = require('vinyl-transform');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename, {paths: ['static/script/']});

    return b.bundle();
  });

  return gulp.src([config.src.js + '/**/*.js'])
    .pipe(browserified)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.js));
});
