module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',


        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'dist/assets/libs/angular/angular.js',
            'dist/assets/libs/angular-mocks/angular-mocks.js',
            'dist/assets/libs/angular-route/angular-route.js',
            'dist/assets/libs/angular-ui-router/release/angular-ui-router.js',
            {pattern: 'app/app.js', included: false},
            {pattern: 'dist/assets/libs/**/*.js', included: false},
            {pattern: 'app/**/*.js', included: false},
            'test-main.js',
            'tests/*.js',
            'tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'dist/assets/libs/requirejs/*.js'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};