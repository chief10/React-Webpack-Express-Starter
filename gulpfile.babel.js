"use strict"
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';


const config = {
  watch: {
    styles:'./AppBase/**/*.scss'
  },
  styles: {
    src: './AppBase/css/style.scss',
    dest: './public/css'
  }
};

gulp.task('styles',() => {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('watch',['styles'], () => {
  gulp.watch(config.watch.styles, ['styles'])
})

gulp.task('default', ['watch']);


