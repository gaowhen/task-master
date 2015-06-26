var gulp = require('gulp');
var config = require('config').gulp;
var watch = require('gulp-watch');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watchify', function () {
  var options = {
    debug: true,
    paths: [config.src.js],
    cache: {},
    packageCache: {},
    fullPaths: true,
    transform: []
  };
  var cache = {};
  var bundler = function (options) {
    return transform(function (filename) {
      if(cache[filename]) {
        return cache[filename].bundle();
      }

      var b = watchify(browserify(filename, options));

      b.on('update', bundle);
      cache[filename] = b;

      return b.bundle();
    });
  };

  function bundle() {
    return gulp.src([config.src.js + '/**/*.js'])
      .pipe(bundler(options))
      .on('error', function (e) {
        this.emit('end');
      })
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./map'))
      .pipe(gulp.dest(config.dist.js));
  }

  return bundle();
});
