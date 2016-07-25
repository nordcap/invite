"use strict";


var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');





 var path = {
    app: {
        bower: './app/bower_components/',
        html: './app/*.html',
        css: './app/',
        scss: './app/*.scss'
    }
};


var AUTOPREFIXER_BROWSERS = [
'ie >= 10',
'ie_mob >= 10',
'ff >= 30',
'chrome >= 34',
'safari >= 7',
'opera >= 23',
'ios >= 7',
'android >= 4.4',
'bb >= 10'
];


//Compile and automatically prefix styleheets
gulp.task('sass', function () {
    return gulp.src(path.app.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.app.css));
});




// Watch files for changes & reload
gulp.task('watch', function () {

    gulp.watch(path.app.scss, ['sass']);

});



//default

//можно использовать gulp.series и gulp.parallel
gulp.task('default', function (callback) {
    runSequence('sass', 'watch', callback);
});
