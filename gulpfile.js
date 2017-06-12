const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');


/////////
// PUG //
/////////
gulp.task('pug', function() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('pug-watch', ['pug'], function() {
    gulp.watch('./pug/**/*.pug', ['pug'])
});

//////////
// SASS //
//////////
gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest('./css'));
});
gulp.task('sass-watch', ['sass'], function() {
    gulp.watch('./sass/*.sass', ['sass'])
});

// Default task
gulp.task('default', ['pug-watch', 'sass-watch']);
