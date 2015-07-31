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
var merge = require('merge-stream');
// For testing
var webdriver = require('gulp-webdriver');
var browserSync = require('browser-sync');

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

gulp.task('test', ['serve:test'], function () {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(webdriver({
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }))
    .once('end', function () {
      browserSync.exit();
    });
});

// Automatically creates components with proper boilerplate and creates associated tests and styles files with the associated boilerplate for each.  Files have reminders in the tops to take necessary action to include them.

gulp.task('create', function() {
  var bp = '/boilerplate'
  if (gutil.env.component) {

    var path = '/components'
    var fname = gutil.env.component

    var component = gulp.src(['src' + path + bp + '.jsx'])
      .pipe(concat(fname + '.jsx'))
      .pipe(gulp.dest('src' + path))

    var test = gulp.src(['test'+ path + bp +'.js'])
      .pipe(concat(fname + '.js'))
      .pipe(gulp.dest('test' + path))

    return merge(component,test)

  } else if (gutil.env.svgIcon) {

    var path = '/components/svgIcons'
    var fname = gutil.env.svgIcon

    var component = gulp.src(['src' + path + bp + '.jsx'])
      .pipe(concat(fname + '.jsx'))
      .pipe(gulp.dest('src' + path))

    var test = gulp.src(['test' + path + bp + '.js'])
      .pipe(concat(fname + '.js'))
      .pipe(gulp.dest('test' + path))

    return merge(component,test)

  } else if (gutil.env.page) {

    var path = '/pages'
    var fname = gutil.env.page

    var component = gulp.src(['src' + path + bp + '.jsx'])
      .pipe(concat(fname + '.jsx'))
      .pipe(gulp.dest('src' + path))

    var test = gulp.src(['test' + path + bp + '.js'])
      .pipe(concat(fname + '.js'))
      .pipe(gulp.dest('test' + path))

    return merge(component,test)

  } else if (gutil.env.static) {

    var path = '/pages/static'
    var fname = gutil.env.static

    var component = gulp.src(['src' + pages + bp + '.jsx'])
      .pipe(concat(fname + '.jsx'))
      .pipe(gulp.dest('src/pages/static'))

    var test = gulp.src(['test' + path + bp + '.js'])
      .pipe(concat(fname + '.js'))
      .pipe(gulp.dest('test' + path))

    return merge(component,test)

  }
});
