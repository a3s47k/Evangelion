module.exports = function (gulp, $, browserSync) {
	gulp.task('create-js', function () {
		return gulp.src([
				'./src/js/_core/*.js',
				'./src/js/*.js'
			])
			.pipe($.sourcemaps.init())
			.pipe($.concat('main.js'))
			.pipe($.babel())
			.pipe($.sourcemaps.write(''))
			.pipe(gulp.dest('./dist/js'));
	});
};
