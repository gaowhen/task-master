var gulp = require('gulp')
var gulpif = require('gulp-if')
var browserify = require('browserify')
var gutil = require('gulp-util')
var through2 = require('through2')
var watchify = require('watchify')
var assign = require('object-assign')
var babelify = require('babelify')
var config = require('config').gulp

module.exports = function (is_dev) {
  var options = {
    paths: [config.src.js]
  }

  if (is_dev) {
    options = assign({}, options, {
      debug: true,
      cache: {},
      packageCache: {}
    })
  }

  var bundler = function () {
    return through2.obj(function (file, enc, next) {
      var b = browserify(file.path, options)
        .transform(babelify.configure({
          presets: ['es2015', 'react'],
          compact: false
        }))

      if (is_dev) {
        b = watchify(b)
        b.on('update', bundle)
        b.pipeline.on('file', function (filename) {
          gutil.log(gutil.colors.green('Bundled: '), filename)
        })
      }

      return b.bundle(function (err, res) {
        if(err) {
          return next(err)
        }
        file.contents = res
        next(null, file)
      })
    })
  }

  function bundle() {
    is_dev ? gutil.log(gutil.colors.yellow('Bundling...')) : null

    return gulp.src([
      config.src.js + '/**/*.js',
      '!' + config.src.js + '/lib/**/*.js'
    ])
    .pipe(bundler())
    .on('error', function(e) {
      gutil.log(gutil.colors.red(e.message))
      is_dev ? this.emit('end') : null
    })
    .pipe(gulp.dest(config.dist.js))
  }

  return bundle()
}
