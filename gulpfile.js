var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync"),
	plumber = require("gulp-plumber");

gulp.task("sass", function() {
	gulp
		.src("app/sass/**/*.scss")
		.pipe(plumber())
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["sass", "browser"], function() {
	gulp.watch("app/sass/**/*.scss", ["sass"]);
	gulp.watch("app/index.html", browserSync.reload);
});

gulp.task("browser", function() {
	browserSync({
		server: { baseDir: "app" },
		notify: false
	});
});
