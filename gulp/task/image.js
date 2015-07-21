/**
 * Created by gaowhen on 15/7/21.
 */
var gulp = require('gulp');
var config = require('config').gulp;

gulp.task('image', function () {
	return gulp.src(config.src.img + '/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)')
		.pipe(gulp.dest(config.dist.img));
});