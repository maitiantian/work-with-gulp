var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

browserSync.init({
	server: {
		baseDir: "./src/"
	}
});

gulp.task('default', function(){
	gulp.watch("./src/index.html").on('change', reload);
	gulp.watch("./src/css/*.*").on('change', reload);
	gulp.watch("./src/scripts/*.*").on('change', reload);
});
