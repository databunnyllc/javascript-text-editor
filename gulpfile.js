let gulp = require("gulp");

// Requires the gulp-sass plugin
const sass = require("gulp-sass");
// Requires the gulp-concat plugin
const concat = require("gulp-concat");

// Hit 'compile-sass' in the terminal to compile all sass files to css
const cssDest = "src/css", sassFiles = "src/scss/**/*.scss";

gulp.task("compile-sass", function() {
    return gulp.src(sassFiles)                  // Getting all scss files in scss folder
    .pipe(sass())                               // Using gulp-sass
    .pipe(gulp.dest(cssDest))                   // Getting all css files in css folder
});

// Concats js files in order.
gulp.task("concat", function() {
    return gulp.src([
        "src/js/variables.js",
        "src/js/fontEditor.js",
        "src/js/paragraphEditor.js",
        "src/js/stylesEditor.js",
        "src/js/printButton.js",
        "src/js/printPreview.js",
        "src/js/letter-counter.js"
    ])
    .pipe(concat("index.js"))
    .pipe(gulp.dest("src/js"))
});