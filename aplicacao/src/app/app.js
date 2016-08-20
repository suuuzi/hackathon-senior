(function() {
    'use strict';
    angular.module('templateApp', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'ngTouch',
            'ngCookies',
            'highcharts-ng',
            'angularScreenfull',
            'toastr'
        ])
        .controller('templateCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
            $scope.pagetitle = "Monitor de Gôndolas";
            $scope.stockMonitor = "Monitorar reposição de gôndolas";
            $scope.classification = "";

            $scope.corredor1 = {
                "status": "cheia",
                "cheio": "http://2.bp.blogspot.com/-ip-yXrIqAZY/UzmhG8gIxYI/AAAAAAAAEto/K7BBaPcHvf0/s1600/frutas+Israel3.jpg",
                "vazio": "http://2.bp.blogspot.com/-RhREiWvG-YQ/VO3O_BdYsyI/AAAAAAAASMA/R336ngKamUI/s1600/img_4613.jpg",
                "imgAtual": "http://2.bp.blogspot.com/-ip-yXrIqAZY/UzmhG8gIxYI/AAAAAAAAEto/K7BBaPcHvf0/s1600/frutas+Israel3.jpg"
            };

            $scope.corredor2 = {
                "status": "cheia",
                "cheio": "http://www.clickmedianeira.com.br/wp-content/uploads/2014/02/306003058.jpg",
                "vazio": "http://jornaldesantacatarina.rbsdirect.com.br/imagesrc/17259192.jpg",
                "imgAtual": "http://www.clickmedianeira.com.br/wp-content/uploads/2014/02/306003058.jpg"
            };

            $scope.corredor3 = {
                "status": "cheia",
                "cheio": "http://www.imfsite.com.br/uploads/imf_20150708071249_12gondola-14.jpg",
                "vazio": "http://siberiaequipamentos.com.br/blog/wp-content/uploads/2014/12/eua-mercado-prateleira-vazia-tl-20110826.jpg",
                "imgAtual": "http://www.imfsite.com.br/uploads/imf_20150708071249_12gondola-14.jpg"
            };

            $scope.corredor4 = {
                "status": "cheia",
                "cheio": "http://ideiaweb.org/wp-content/uploads/produtos-no-supermercado.jpg",
                "vazio": "http://onegociodovarejo.com.br/wp-content/uploads/2015/11/gondola.jpg",
                "imgAtual": "http://ideiaweb.org/wp-content/uploads/produtos-no-supermercado.jpg"
            };

            $scope.refreshImg = function(corredor) {
                switch (corredor) {
                    case 1:
                        $scope.corredor1.imgAtual = $scope.corredor1.status === "cheia" ? $scope.corredor1.cheio : $scope.corredor1.vazio;
                        $scope.$apply();
                        break;
                    case 2:
                        $scope.corredor2.imgAtual = $scope.corredor2.status === "cheia" ? $scope.corredor2.cheio : $scope.corredor2.vazio;
                        $scope.$apply();
                        break;
                    case 3:
                        $scope.corredor3.imgAtual = $scope.corredor3.status === "cheia" ? $scope.corredor3.cheio : $scope.corredor3.vazio;
                        $scope.$apply();
                        break;
                    case 4:
                        $scope.corredor4.imgAtual = $scope.corredor4.status === "cheia" ? $scope.corredor4.cheio : $scope.corredor4.vazio;
                        $scope.$apply();
                        break;
                }
            };

            $scope.getImgReverse = function(corredor) {
                switch (corredor) {
                    case 1:
                        return $scope.corredor1.status === "cheia" ? $scope.corredor1.vazio : $scope.corredor1.cheio;
                    case 2:
                        return $scope.corredor2.status === "cheia" ? $scope.corredor2.vazio : $scope.corredor2.cheio;
                    case 3:
                        return $scope.corredor3.status === "cheia" ? $scope.corredor3.vazio : $scope.corredor3.cheio;
                    case 4:
                        return $scope.corredor4.status === "cheia" ? $scope.corredor4.vazio : $scope.corredor4.cheio;
                }
            };

            $scope.notificacoes = [];

            $scope.removeNotification = function(corredor) {
                for (var i = 0; i < $scope.notificacoes.length; i++) {
                    if ($scope.notificacoes[i].corredor == corredor) {
                        $scope.notificacoes.splice(i, 1);
                    }
                }
            };

            $scope.addNotification = function(corredor, nome) {
                var reg = {
                    "corredor": corredor,
                    "pessoa": nome
                }
                $scope.notificacoes.unshift(reg);
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

            $scope.getClassification = function(corredor) {
                    var imageUrl = $scope.getImgReverse(1);

                    switch (corredor) {
                        case 1:
                            imageUrl = $scope.corredor1.status === "cheia" ? $scope.corredor1.vazio : $scope.corredor1.cheio;
                            break;
                        case 2:
                            imageUrl = $scope.corredor2.status === "cheia" ? $scope.corredor2.vazio : $scope.corredor2.cheio;
                            break;
                        case 3:
                            imageUrl = $scope.corredor3.status === "cheia" ? $scope.corredor3.vazio : $scope.corredor3.cheio;
                            break;
                        case 4:
                            imageUrl = $scope.corredor4.status === "cheia" ? $scope.corredor4.vazio : $scope.corredor4.cheio;
                            break;
                    }

                    var form = new FormData();
                    form.append("parameters", "{ \"url\": \"" + imageUrl + "\",     \t\"classifier_ids\": [\"gondolas_924548435\", \"default\"]  }");

                    var settings = {
                        "async": true,
                        "url": "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=f740e80e0e3b614dd34f833d80630fe830fd25a1&version=2016-05-20",
                        "method": "POST",
                        "processData": false,
                        "contentType": false,
                        "mimeType": "multipart/form-data",
                        "data": form
                    }

                    $.ajax(settings).done(function(response) {
                        var res = JSON.parse(response);
                        $scope.classification = res.images[0].classifiers[1].classes[0].class;
                        var nome = "";
                        switch (corredor) {
                            case 1:
                                $scope.corredor1.status = $scope.classification;
                                nome = "Ariadne";
                                $scope.refreshImg(corredor);
                                break;
                            case 2:
                                $scope.corredor2.status = $scope.classification;
                                nome = "Suzane";
                                $scope.refreshImg(corredor);
                                break;
                            case 3:
                                $scope.corredor3.status = $scope.classification;
                                nome = "Jonathan";
                                $scope.refreshImg(corredor);
                                break;
                            case 4:
                                $scope.corredor4.status = $scope.classification;
                                nome = "Gielez";
                                $scope.refreshImg(corredor);
                                break;

                        }
                        if ($scope.classification != undefined && $scope.classification === "vazia") {
                            $scope.addNotification(corredor, nome);
                            toastr.error('Corredor ' + corredor + ' precisa de reposição', 'Atenção');
                        }
                    });
                }

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
