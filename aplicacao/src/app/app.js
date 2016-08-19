(function(){
	'use strict';
	angular.module('templateApp', [

    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'highcharts-ng',
    'angularScreenfull'


	])
    .controller('templateCtrl', ['$scope', function($scope){
        $scope.pagetitle = "Video Analytics";
				$scope.stockMonitor = "Monitorar reposição de gôndolas";
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
