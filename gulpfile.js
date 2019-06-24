const gulp = require("gulp");
// Requires the gulp-sass plugin
const sass = require("gulp-sass");

// Hit 'compile-sass' in the terminal to compile all sass files to css
gulp.task("compile-sass", function() {
    return gulp.src("src/scss/**/*.scss")      // Getting all scss files in scss folder
    .pipe(sass())                              // Using gulp-sass
    .pipe(gulp.dest("src/css"))                // Getting all css files in css folder
});
