var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var stylish = require('jshint-stylish');

gulp.task('jshint', function() {
return gulp.src(['./src/main/javascript/**/*.js', './gulp/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
  });
