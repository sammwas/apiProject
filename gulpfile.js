var gulp=require('gulp');
var source=require('vinyl-source-stream');
var browserify=require('browserify');



gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/scripts-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
