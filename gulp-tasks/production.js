var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babelify = require('babelify');
var connect = require('gulp-connect');

// Bundles .jsx files for delivery to client browsers
var bundler = browserify({
  entries: ['./src/app.jsx'],
  transform: [reactify, babelify],
  extensions: ['.jsx'],
  debug: false,
  cache: {}, packageCache: {},
})

// Calls the bundler
var bundle = function () {
  return bundler
    .bundle()
    .on('error', gutil.log)
    .pipe(gulp.src('main.js'))
    .pipe(gulp.dest('./dist'))
}

// Production server
gulp.task('serve:production', function() {
  connect.server({
    root: 'dist',
    port: 8000
  })
});

// Production sass compression
gulp.task('sass:production', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'));
});

// Calls production build funcitons
gulp.task('build:production', function() {
  bundle()
})
