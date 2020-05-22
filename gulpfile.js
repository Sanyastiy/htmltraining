const gulp=require('gulp');

gulp.task('hello',function (callback) {
    console.log('hello from gulp)');
    callback();
})

gulp.task('first',function (callback) {
    console.log('hellofrom First task');
    callback();
})

gulp.task('second',function (callback) {
    console.log('hellofrom second task');
    callback();
})

gulp.task('third',function (callback) {
    console.log('hellofrom third task');
    callback();
})

gulp.task('fourth',function (callback) {
    console.log('hellofrom fourth task');
    callback();
})

gulp.task('default', gulp.parallel('first','second','third','fourth'))
