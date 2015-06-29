var gulp = require('gulp'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('js', function(){
    browserify('./src/main.js')
        .transform(reactify)
        .bundle()
        .pipe(source('./bundle.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch(['./src/*.js', 'index.html'], ['js']);
});
