var gulp = require('gulp');

var compass = require('gulp-compass');

gulp.task('compass', function() {
    gulp.src('./scss/**')
        .pipe(compass({
            comments: false,
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('vendor', function() {
    // jInvertScroll
    //gulp.src('./bower_components/jInvertScroll/dist/js/jquery.jInvertScroll.js')
    //    .pipe(gulp.dest('./vendor'));
});

gulp.task('default', function() {
    gulp.run('compass');
    gulp.run('vendor');

    gulp.watch([
        './scss/**',
        './img/**',
        './js/**',
        '*.html'
    ], function(event) {
        gulp.run('compass');
    });
});
