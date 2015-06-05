var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
 
gulp.task('browserify', function() {
    return browserify('./lib/front-end/index.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/vendor'));
});