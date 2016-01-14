const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const less = require('gulp-less');


/**
 * DUUHHHH!!!
 */
// gulp.task('less', () => {
//   return gulp.src('./src/css/main.less')
//     .pipe(less())
//     .pipe(gulp.dest('./public/css'));
// });

gulp.task('deploy', () => {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});
