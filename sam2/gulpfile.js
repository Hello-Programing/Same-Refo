const gulp = require('gulp');
const scss = require('gulp-sass');

let week8 = {
  scss:'./8주차/Study/ssangyong/Src/Style/Scss/**/*.scss',
  cssDist:'./8주차/Study/ssangyong/Dist/Style/Css/'
}
gulp.task('scss', function(){
  return gulp.src(week8.scss)
  .pipe(scss())
  .pipe(gulp.dest(week8.cssDist))
});

gulp.task('watch', function(){
  gulp.watch(week8.scss, ['scss']);
});

gulp.task('default', ['scss', 'watch']);