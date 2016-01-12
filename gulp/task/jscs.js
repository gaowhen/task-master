var gulp = require('gulp')

var config = require('config').gulp
var jscs = require('gulp-jscs')
var argv = require('yargs').argv
var files = argv.file && argv.file.split(' ')

if (!files || files.length === 0) {
  files = config.src.js + '/**/*.js'
}

function lint() {
  return gulp.src(files)
    .pipe(jscs({fix: true}))
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
}

gulp.task('jscs', lint)
