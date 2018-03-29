const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')

gulp.task('default', function () {
  var postcss = require('gulp-postcss')
  var tailwindcss = require('tailwindcss')

  return gulp.src('src/main.css')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss([
      tailwindcss(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
})
