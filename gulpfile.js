var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
// For testing
var webdriver = require('gulp-webdriver');
var browserSync = require('browser-sync');
var selenium = require('gulp-webdriver/node_modules/selenium-standalone');
var mocha = require('gulp-mocha');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  console.log(title+"\n"+message);
};

var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

gulp.task('serve', function(done) {
  gulp.src('./dist')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/main.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'serve', 'sass', 'watch']);

// For testing
// From http://twin.github.io/selenium-testing-workflow-with-webdriverio/

gulp.task('serve:test', function (done) {
  browserSync({
    logLevel: 'silent',
    notify: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    },
    ui: false
  }, done);
});

gulp.task('selenium', function (done) {
  selenium.install({
    version: '2.46.0',
    baseURL: 'http://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        version: '2.16',
        arch: process.arch,
        baseURL: 'http://chromedriver.storage.googleapis.com'
      },
      ie: {
        version: '2.45',
        arch: process.arch,
        baseURL: 'http://selenium-release.storage.googleapis.com'
      }
    },
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('integration', ['serve:test', 'selenium'], function () {
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha({ timeout: 5000 }));
});

gulp.task('test', ['integration'], function () {
  selenium.child.kill();
  browserSync.exit();
  return null
});