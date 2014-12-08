var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');

gulp.task('default', ['basswork', 'jekyll']);

gulp.task('basswork', function () {
    gulp.src('./basscss/basscss.css')
        .pipe(basswork({}))
        .pipe(rename({ prefix: '_', extname: '.scss' }))
        .pipe(gulp.dest('./_sass'))
});

gulp.task('jekyll', function () {
    require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});
});