'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const execSync = require('child_process').execSync;
const changed = require('gulp-changed');

gulp.task('build', () => {
  execSync('rm -rf dist');
  return gulp.src(['src/**/*.js'])
    .pipe(changed('dist'))
    .pipe(babel(),)
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['build'], () => {
  gulp.watch('./src/*', ['build']);
});
