// Require gulp
var gulp = require('gulp');

// Require all other gulp tasks
require('require-dir')('./gulp-tasks');
// Default production task
gulp.task('production',['serve:production'])
// Default development task
gulp.task('default', ['build', 'serve', 'sass', 'watch']);
// Default test task
gulp.task('test',['run:tests']);
