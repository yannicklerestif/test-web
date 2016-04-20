var gulp = require('gulp');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('serve', function () {
	browserSync({
		notify: false,
		logPrefix: 'SoN',
		server: 'www'
	});

	gulp.watch(['www'], reload);
	//gulp.watch(['www/**/*.html'], reload);
	//gulp.watch(['www/css/**/*.css'], reload);
	//gulp.watch(['www/js/**/*.js'], reload);
	//gulp.watch(['www/images/**/*'], reload);
});
