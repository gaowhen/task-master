var gulp = require('gulp')
var child = require('child_process')

gulp.task('serve', function () {
  var server = child.spawn('node', ['app.js'])
})
