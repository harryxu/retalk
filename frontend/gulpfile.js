var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var env = process.env.NODE_ENV;

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

    if (env != 'production') {
        // dev options
        webpackConfig.devtool = 'source-map';
    }

    return gulp.src('./src/index.js')
        .pipe(webpack(webpackConfig))
        .on('error', swallowError)
        .pipe(gulpif(env == 'production', uglify()))
        .pipe(gulp.dest('../public/js'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', { interval: 500 }, ['react']);
});

gulp.task('default', ['watch']);
