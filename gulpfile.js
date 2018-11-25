var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync"),
	plumber = require("gulp-plumber");

gulp.task("sass", function() {
	gulp
		.src("app/sass/main.scss")
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

gulp.task("build", function() {
	gulp.src(["app/css/*.css"]).pipe(gulp.dest("build/css"));
	gulp.src(["app/images/*.*"]).pipe(gulp.dest("build/images"));
	gulp.src("app/*.html").pipe(gulp.dest("build"));
});
