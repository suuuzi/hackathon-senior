var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        } else {
        }
    }
}

requirejs.config({
    baseUrl: '/base/app/',
    paths: {
        angular: 'dist/assets/libs/angular/angular.min',
        'angular-mocks': 'dist/assets/libs/angular-mocks/angular-mocks',
        'angular-route': 'dist/assets/libs/angular-route/angular-route',
        'angular-ui-router': 'dist/assets/libs/angular-ui-router/release/angular-ui-router',
        bootstrap: 'dist/assets/libs/bootstrap/dist/js/bootstrap',
        /**
         * It is needed to declare the resource views file path
         * to handle the file dependencies such as angular before
         * the resource is loaded.
         */
        'resource-views':'src/resources/views'
    },
    packages: [

    ],
    shim: {
        'angular-ui-router': {
            deps: [
                'angular',
                'angular-route'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        'resource-views': {
            deps: [
                'angular'
            ]
        }
    },
    deps: tests,
    callback: window.__karma__.start
});