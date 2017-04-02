define('sims.student',[
  'angular',
  'angular-route'
  ],function (angular) {
  'use strict';
    var app = angular.module('DashboardApp', ['ngRoute']);
    var baseUrl  ='http://localhost:5000/';
    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
          app.controller = $controllerProvider.register;
          app.directive  = $compileProvider.directive;
          app.filter     = $filterProvider.register;
          app.factory    = $provide.factory;  
          app.service    = $provide.service;

            // $locationProvider.html5Mode(true);

            $routeProvider
            .when('/base',{
              templateUrl: baseUrl + '/base/',
              controller:'DashboardCtrl'
            })
            .otherwise({
              // templateUrl: baseUrl + 'dashboard-tpl.html'
            })
            // if(config.routes !== undefined)
            // {
            //     angular.forEach(config.routes, function(route, path)
            //     {
            //         $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
            //     });
            // }

            // if(config.defaultRoutePaths !== undefined)
            // {
            //     $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            // }
        }
    ]);
      $(document).ready(function() {
        $('#wizard').smartWizard();

        $('#wizard_verticle').smartWizard({
          transitionEffect: 'slide'
        });

        $('.buttonNext').addClass('btn btn-success');
        $('.buttonPrevious').addClass('btn btn-primary');
        $('.buttonFinish').addClass('btn btn-default');
      });
   return app;
});
requirejs(['/module-loader/requirejs-config.js'], function (){
  requirejs([
    'jquery',
    'angular',
    'sims.student',

    'angular-route',
    'custom',
    'jquery-smartwizard'
  ],function($,angular,app){
    $(function(){
      angular.bootstrap(document, [app.name]);
    });
  });
});