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

gulp.task('default', function() {
    gulp.run('compass');

    gulp.watch([
        './scss/**',
        './img/**'
    ], function(event) {
        gulp.run('compass');
    });
});
