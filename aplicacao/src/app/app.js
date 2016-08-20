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
            $scope.classification = [];
            // $scope.corredor1.cheio = "";
            // $scope.corredor1.vazio = "";
            //
            // $scope.corredor2.cheio = "";
            // $scope.corredor2.vazio = "";
            //
            // $scope.corredor3.cheio = "";
            // $scope.corredor3.vazio = "";
            //
            // $scope.corredor4.cheio = "";
            // $scope.corredor4.vazio = "";

            $scope.notificacoes = [{
                "texto": "osdajiojdsad"
            }, {
                "texto": "3443"
            }, {
                "texto": "fdsfd"
            }];

            $scope.addNotification = function() {

            }

            $scope.getName = function() {
                var url = 'http://gondolaapi.mybluemix.net/PersonServlet';
                $http({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function successCallback(response) {
                    return response.data.nome;
                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
            }

            $scope.getCalssification = function() {
                var form = new FormData();
                form.append("parameters", "{ \"url\": \"http://valormercado.com.br/wp-content/uploads/2015/10/sup.jpg\",     \t\"classifier_ids\": [\"gondolas_730064764\", \"default\"]  }");

                var settings = {
                    "async": true,
                    "url": "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=9447ee0386b4c92c8642194a9f7d7c7e2019b8e3&version=2016-05-20",
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                }

                $.ajax(settings).done(function(response) {
                    var res =  JSON.parse(response);
                    $scope.classification = res.images[0].classifiers[1].classes[0].class;
                    console.log($scope.classification);

                });
            }
            $scope.getCalssification();

        }])
        .config(configFunction);


    configFunction.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

    function configFunction($urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');

        // $httpProvider.defaults.headers.common["Accept"] = "application/json";
        // $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        // $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
        // $httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "POST, GET, DELETE, PUT";
        // $httpProvider.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $stateProvider.state('sample', {
            url: "/",
            templateUrl: "app/modules/sampleModule/views/dashboard.html"
        });

    }
})();
