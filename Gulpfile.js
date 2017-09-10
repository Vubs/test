let gulp = require('gulp');
let p = require('gulp-load-plugins')();


gulp.task('script', () => {
   return gulp.src(".js/**/*.js")
       .pipe(p.concat("app.js"))
       .pipe(p.uglify())
       .pipe(gulp.dest('.js/concat'));
});


gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/min'));
});

gulp.task("watch", ["minify-css", "script"], function () {
    gulp.watch("./css/**/*.css", ["minify-css"]);
    gulp.watch("./js/**/*.js", ["script"]);
});

gulp.task("default", ["minify-css", "script"]);