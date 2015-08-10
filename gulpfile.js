// Require gulp
var gulp = require('gulp');

// Require all other gulp tasks
var requireDir = require('require-dir');
requireDir('./gulp-tasks');
// Default production task
gulp.task('production',['build:production', 'sass:production', 'serve:production'])
// Default development task
gulp.task('default', ['build', 'serve', 'sass', 'watch']);
// Default test task
gulp.task('test',['run:tests']);
