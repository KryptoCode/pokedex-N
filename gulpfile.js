var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	print = require('gulp-print'),
	concat = require('gulp-concat');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('default', function() {
	console.log("hello");
});
