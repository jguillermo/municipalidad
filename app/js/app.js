(function() {
    'use strict';
    angular.module('Admin', [
            'ngTouch',
            'ngMessages',
            'oc.lazyLoad',
            'ui.router',
            'jgTools',
            'Admin.config',
            'Admin.template'
        ])
        .config(['$jgConfigProvider', '$urlRouterProvider', '$stateProvider', 'ADMINCONFIG', function($jgConfigProvider, $urlRouterProvider, $stateProvider, ADMINCONFIG) {


            $jgConfigProvider.setBaseFile(ADMINCONFIG.baseFile);
            $jgConfigProvider.setSkin(ADMINCONFIG.skin);
            $jgConfigProvider.setSkinSufix(ADMINCONFIG.skinSufix);
            $jgConfigProvider.setLoadModule(ADMINCONFIG.loadModule);

            $jgConfigProvider.setCache(ADMINCONFIG.cache);
            $jgConfigProvider.setVersion(ADMINCONFIG.version);

            $urlRouterProvider.otherwise("/sis/dashboard");
            $stateProvider
                .state('sis', {
                    abstract: true,
                    url: "/sis",
                    templateUrl: '/app/views/sis/layout-admin.html',
                    //templateUrl: '/devmap/helpers/admin-template/app/views/sis/layout-admin.html',
                    //templateProvider: ['$http', function($http) {
                    //    return $http
                    //        .post(ADMINCONFIG.base_url + 'sis/layout-admin')
                    //        .then(function(response) {
                    //            return response.data;
                    //        });
                    //}],
                    controller: 'AdminCtrl',
                })
                .state('sis.dashboard', {
                    url: '/dashboard',
                    templateUrl: '/app/views/dashboard/index.html',
                    controller: 'DashboardCtrl',
                    resolve: {
                        foo: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'moduleDashboard',
                                files: [
                                    ADMINCONFIG.base_path + 'dashboard.js' + ADMINCONFIG.view_sufix
                                ]
                            }])
                        }]
                    }
                })
                .state('sis.licencias', {
                    url: '/licencias/:ida/:idb',
                    templateUrl: '/app/views/licencias/buscar.html',
                    controller: 'LicenciasCtrl',
                    resolve: {
                        foo: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'moduleLicencias',
                                files: [
                                    ADMINCONFIG.base_path + 'entity/licencias.js' + ADMINCONFIG.view_sufix
                                ]
                            }])
                        }]
                    }
                })
                .state('sis.licencias-mapa', {
                    url: '/licencias-mapa',
                    templateUrl: '/app/views/licencias/mapa.html',
                    controller: 'LicenciasMapaCtrl',
                    resolve: {
                        foo: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'moduleLicencias',
                                files: [
                                    ADMINCONFIG.base_path + 'entity/licencias.js' + ADMINCONFIG.view_sufix
                                ]
                            }])
                        }]
                    }
                })
                .state('sis.licencias-estadistica', {
                    url: '/licencias-estadistica',
                    templateUrl: '/app/views/licencias/estadistica.html',
                    controller: 'LicenciasEstadisticaCtrl',
                    resolve: {
                        foo: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'moduleLicencias',
                                files: [
                                    ADMINCONFIG.base_path + 'entity/licencias.js' + ADMINCONFIG.view_sufix
                                ]
                            }])
                        }]
                    }
                })
                ;
        }])
        .run(['$jgConfig', 'jgsLinkAsyncServices', 'jgsCacheLinkServices', function($jgConfig, jgsLinkAsyncServices, jgsCacheLinkServices) {

            jgsCacheLinkServices.deleteOldVersion($jgConfig.version);

            if ($jgConfig.loadModule) {
                jgsLinkAsyncServices.putLink($jgConfig.baseFile + $jgConfig.skin + '/core' + $jgConfig.skinSufix, $jgConfig.version, $jgConfig.cache);
            } else {
                jgsLinkAsyncServices.putLink($jgConfig.baseFile + $jgConfig.skin + '/all' + $jgConfig.skinSufix, $jgConfig.version, $jgConfig.cache);
            }
            if ($jgConfig.cache) {
                // carga los archivos que aun no estan guardadso en memoria storage
                for (var i = 0; i < jsApiModule.link.length; i++) {
                    jgsLinkAsyncServices.putLink(jsApiModule.link[i].href, $jgConfig.version, true);
                };
            }
        }]);
})();