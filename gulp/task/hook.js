/**
 * Created by gaowhen on 15/1/15.
 */

var gulp = require('gulp')
require('./precommit')
require('./precommit')

gulp.task('hook', ['precommit', 'commitmsg'])
