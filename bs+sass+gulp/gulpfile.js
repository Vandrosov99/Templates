const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

gulp.task("sass", () => {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("serve", gulp.series("sass"), () => {
  browserSync.init({
    server: "./src"
  });
  gulp.watch("src/scss/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("serve", "sass"));
