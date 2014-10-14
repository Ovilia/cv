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
    // jQuery
    gulp.src('./bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('./vendor'));
    
    // oriDomi
    gulp.src('./bower_components/oridomi/oridomi.js**')
        .pipe(gulp.dest('./vendor'));
});

gulp.task('default', function() {
    gulp.run('compass');
    gulp.run('vendor');

    gulp.watch([
        './scss/**',
        './img/**'
    ], function(event) {
        gulp.run('compass');
    });
});
