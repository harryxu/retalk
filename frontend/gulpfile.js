var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var argv = require('yargs').argv;

/**
 * http://stackoverflow.com/a/23973536/157811
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('react', function() {

    if (!argv.prod) {
        // dev options
        webpackConfig.devtool = 'source-map';
    }

    return gulp.src('src/main.js')
        .pipe(webpack(webpackConfig))
        .on('error', swallowError)
        .pipe(gulpif(argv.prod, uglify()))
        .pipe(gulp.dest('../public/js'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['react']);
});

gulp.task('default', ['watch']);
