var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	// del = require('del'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	print = require('gulp-print'),
	concat = require('gulp-concat');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();
var deploy = require('gulp-gh-pages');

gulp.task('default', function() {
	console.log("hello");
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});