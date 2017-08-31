var gulp = require('gulp');
var sass = require('gulp-sass');
var path = 'modules/components/**/*.scss';

gulp.task('compile-sass', function(){
    return gulp.src(path)
        .pipe(sass())
        .pipe(gulp.dest(function(file){
            return file.base;
        }));
});

gulp.task('default', [
    'compile-sass'
]);
