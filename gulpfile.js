var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var concat = require('gulp-concat')

var paths = {
  src: 'src/**/*.js',
  dest: 'dist'
}

gulp.task('es6', function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest))
})

gulp.task('watch', () => {
  gulp.watch(paths.src, ['es6'])
})
