const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('dev', (done) => {
  browserSync.init({
    server: './dist',
  });
  gulp.watch(['dist/**/*']).on('change', browserSync.reload);
  done();
});

gulp.task('default', gulp.series('dev'));
