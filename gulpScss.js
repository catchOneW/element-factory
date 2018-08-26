
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.src('./scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`./css/${new Date().getTime()}`));