'use strict';

const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');

function buildStyles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

exports.buildStyles = buildStyles;
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', buildStyles);
};