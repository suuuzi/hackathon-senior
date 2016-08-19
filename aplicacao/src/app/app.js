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

						var url = "http://gondolaapi.mybluemix.net/PersonServlet";
						$http({
						    method: 'JSONP',
						    url: url
						}).
						success(function(response) {
							//console.log(response.nome);
						    //return	status.nome;
						}).
						error(function(status) {
						    //your code when fails
						});

        }])
        .config(configFunction);


    configFunction.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

    function configFunction($urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
				$httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $stateProvider.state('sample', {
            url: "/",
            templateUrl: "app/modules/sampleModule/views/dashboard.html"
        });

    }
})();
