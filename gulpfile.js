var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

const DIRS_JS = {
  SRC: 'src/**/*.js',
  DISTS: 'dist'
}

const DIRS_SASS = {
  SRC: 'src/**/*.scss',
  DISTS: 'dist'
};

const DIRS_HTML = {
  SRC: 'src/**/*.html',
  DISTS: 'dist'
}

gulp.task('babel', function () {
  return gulp.src(DIRS_JS.SRC)
    .pipe(babel())
    .pipe(gulp.dest(DIRS_JS.DISTS));
});

gulp.task('sass', function () {
  return gulp.src(DIRS_SASS.SRC)
    .pipe(sass())
    .pipe(gulp.dest(DIRS_SASS.DISTS))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src(DIRS_HTML.SRC)
    .pipe(gulp.dest(DIRS_HTML.DISTS));

});

let defaultTask = ['babel', 'sass', 'html'];

gulp.task('default', defaultTask, function () {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch(DIRS_JS.SRC, ['babel']);
  gulp.watch(DIRS_SASS.SRC, ['sass']);
  gulp.watch(DIRS_HTML.SRC, ['html']);

  gulp.watch(DIRS_HTML.SRC).on('change', browserSync.reload);
  gulp.watch(DIRS_JS.SRC).on('change', browserSync.reload);

});