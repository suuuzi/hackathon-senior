(function(){
	'use strict';
	angular.module('templateApp', [
	
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'highcharts-ng',
    'angularScreenfull',

    //senior
    'senior-multi-select'

		
	])
    .controller('templateCtrl', ['$scope', function($scope){
        $scope.pagetitle = "Templates de frontend";
    }])
    .config(configFunction);


	configFunction.$inject = ['$urlRouterProvider', '$stateProvider'];

	function configFunction($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('sample', {
            url: "/",
            templateUrl: "app/modules/sampleModule/views/dashboard.html"
        });

	}
})();