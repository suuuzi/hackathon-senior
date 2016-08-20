(function() {
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
        .controller('templateCtrl', ['$scope', '$http', function($scope, $http) {
            $scope.pagetitle = "Video Analytics";
            $scope.stockMonitor = "Monitorar reposição de gôndolas";
						$scope.notificacoes = [
							{"texto": "osdajiojdsad"},
							{"texto": "3443"},
							{"texto": "fdsfd"}
						];

						var url = 'http://gondolaapi.mybluemix.net/PersonServlet';

						$http({
						    method : 'GET',
						    url : url,
								headers: {
									'Content-Type': 'application/json',
									'Access-Control-Allow-Methods': '*',
									'Access-Control-Allow-Origin': '*',
									'Access-Control-Request-Headers': 'access-control-allow-methods, access-control-allow-origin'
								}
						}).then(function successCallback(response) {
						    console.log(response.nome);
						}, function errorCallback(response) {
						    console.log(response.statusText);
						});


        }])
        .config(configFunction);


    configFunction.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

    function configFunction($urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
	        $httpProvider.defaults.headers.common["Accept"] = "application/json";
	        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
					$httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
					$httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "*";
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $stateProvider.state('sample', {
            url: "/",
            templateUrl: "app/modules/sampleModule/views/dashboard.html"
        });

    }
})();
