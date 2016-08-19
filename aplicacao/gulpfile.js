'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var bowerFiles = require('main-bower-files');
var es = require('event-stream');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var GulpSSH = require('gulp-ssh')
var replace = require('gulp-replace');
var bump = require('gulp-bump');

var argv = require('yargs').argv;

var Server = require('karma').Server;


/**
  Gets the html partials and compile into one single js
*/
gulp.task('partials', function () {
  return gulp.src([
    './src/app/**/*.html'
  ])
  .pipe(templateCache('templates.js', {
    standalone: true
  }))
  .pipe(gulp.dest('./src/app/'));
});

gulp.task('inject', ['partials'], function(){

  return gulp.src('./src/index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
  .pipe(inject(es.merge(
    gulp.src(['./src/assets/**/*.css', '!./src/assets/libs/**/*']),
    gulp.src(['./src/assets/**/*.js', '!./src/assets/libs/**/*']),
    gulp.src(['./src/app/**/*.js']).pipe(angularFilesort())
  ), {relative: true}))
  .pipe(gulp.dest('./dist'));

});

gulp.task('copybower', ['partials', 'inject'], function(){
  return gulp.src(bowerFiles(), {base: './src'})
  .pipe(gulp.dest('./dist'));
});

gulp.task('copy', ['partials', 'inject', 'copybower'], function(){
  return gulp.src(['./src/**/*', '!./src/index.html', '!./src/**/*.html.', '!./src/assets/libs/**/*'], {base: './src/app'})
  .pipe(gulp.dest('./dist/app'));
});

gulp.task('watch', function () {
  watch(['./src/**/*', '!./src/app/templates.js'], batch(function (events, done) {
      gulp.start('default', done);
  }));
});

gulp.task('url', ['partials', 'inject', 'copybower', 'copy'], function(){
  var url = argv.url || 'http://teste77:9090';
  var home = argv.home || 'http://teste46.interno.senior.com.br:8080/plataforma/landpage.html';

  return gulp.src(['./dist/**/*.js', './dist/**/*.html'])
    .pipe(replace('@@URL@@', url))
    .pipe(replace('@@HOME@@', home))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('ssh', ['partials', 'inject', 'copybower', 'copy', 'url'], function (cb) {
  var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
      host: 'teste46',
      port: '22',
      username: 'teste46',
      password: 'te$te46'
    }
  });

  return gulp
    .src(['./dist/**/*'])
    .pipe(gulpSSH.dest('/usr/share/nginx/html/frontend-template/'))
});

/*
  Release types:
    major 1.0.0
    minor 0.1.0
    patch 0.0.1
*/
gulp.task('bump', function(){
  var release = argv.release;

  return gulp
    .src(['./bower.json', './package.json'])
    .pipe(bump({type: release}))
    .pipe(gulp.dest('./'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/test.conf.js',
    singleRun: true
  }, done() ).start();
});

gulp.task('default', ['partials', 'inject', 'copybower', 'copy', 'url', 'test']);
