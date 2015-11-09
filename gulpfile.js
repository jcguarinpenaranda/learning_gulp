//tutorial from http://tagtree.io/gulp

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('process-styles',function(){
  return gulp.src('main.scss')
    .pipe(sass({style:'expanded'}))
    .pipe(gulp.dest('.'))
})

gulp.task('process-scripts',function(){
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    //Se manda el archivo a donde queremos
    .pipe(gulp.dest('dest/scripts/'))
    //Tambien se manda la version .min
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dest/scripts/'))
})

gulp.task('watch', function(){
  //A todos los cambios detectados en src../*.js,
  //aplíqueles las funciones pasadas
  gulp.watch('src/scripts/*.js', ['process-scripts'])
})


gulp.task('default',function(){
  console.log("Configured gulp")
})
