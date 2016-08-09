'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('autoprefixer', function () {
  return gulp.src(['./dist/css/grid.css'])
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('cssmin', function () {
  gulp.src(['./dist/css/grid.css'])
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['build']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['sass', 'autoprefixer', 'cssmin']);
