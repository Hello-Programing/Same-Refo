const gulp = require('gulp');
const scss = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const imgmin = require('gulp-imagemin');
const rename = require('gulp-rename');

let SRC ={
  SCSS:"./Public/Src/Project/**/*.scss",
  JS:"./Public/Src/Project/**/*.js",
  IMG:"./Public/Src/Project/**/*.{jpg,png,jpeg,gif,svg}",
  HTML:"./Public/Src/Project/**/*.html"
}
let DIST ={
  CSS:"./Public/Dist/Project",
  JS:"./Public/Dist/Project",
  IMG:"./Public/Dist/Project",
  HTML:"./Public/Dist/Project"
}

gulp.task('htmlmin', function(){
  return gulp.src(SRC.HTML)
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest(DIST.HTML))
});

gulp.task('scss', function(){
  return gulp.src(SRC.SCSS)
  // .pipe(rename(function(path){
  //   console.log(path)
  //   path.basename 
  // }))
  .pipe(scss())
  .pipe(gulp.dest(DIST.CSS))
});

gulp.task('babel', function(){
  return gulp.src(SRC.JS)
  .pipe(babel())
  .pipe(gulp.dest(DIST.JS))
});


gulp.task('imgmin', function(){
  return gulp.src(SRC.IMG)
  .pipe(imgmin())
  .pipe(gulp.dest(DIST.IMG))
});

gulp.task('watch', function(){
  gulp.watch(SRC.SCSS, ['scss'])
  gulp.watch(SRC.JS, ['babel'])
  gulp.watch(SRC.HTML, ['htmlmin'])
  gulp.watch(SRC.IMG, ['imgmin'])
});
//gulp default
gulp.task('default', ['scss','babel','htmlmin','imgmin', 'watch']);