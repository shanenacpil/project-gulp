// Sample gulp function
var gulp = require('gulp');

gulp.task('hello', function() {
    console.log('Hello Shane');
});


// Sass to CSS
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app.scss
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Gulp watch syntax
// gulp.task('watch', function(){
//   gulp.watch('app/scss/**/*.scss', ['sass']);
// });

//Gulp run both watch and browserSync syntax at the same time
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS file change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*,js', browserSync.reload);
});

// Browser Sync
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//Optimizing CSS and JavaScript files
var useref = require('gulp-useref');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
