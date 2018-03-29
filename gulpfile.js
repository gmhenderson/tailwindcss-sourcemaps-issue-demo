const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')

gulp.task('default', function () {
  gulp.start(['tailwind','workingexample'])
})

gulp.task('tailwind', function () {
  var tailwindcss = require('tailwindcss')

  return gulp.src('src/tailwind.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      tailwindcss(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
})

gulp.task('workingexample', function () {
  return gulp.src('src/working.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
        require('postcss-easy-import')
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
})
