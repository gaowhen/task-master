var gulp = require('gulp')

var config = require('config').gulp
var eslint = require('gulp-eslint')
var argv = require('yargs').argv
var files = argv.file && argv.file.split(' ')

if (!files || files.length === 0) {
  files = config.src.js + '/**/*.js'
}

function lint() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

gulp.task('eslint', lint)
