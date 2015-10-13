'use strict';

/**
 * @ngdoc overview
 * @name guitarCenterApp
 * @description
 * # guitarCenterApp
 *
 * Main module of the application.
 */
angular
  .module('guitarCenterApp', [
    'ngRoute', 'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl',controllerAs: 'main'})
      .when('/about', {templateUrl: 'views/about.html',controller: 'AboutCtrl',controllerAs: 'about'})
      .when('/product', {templateUrl: 'views/product.html',controller: 'ProductCtrl',controllerAs: 'prod'})
      .when('/product/buy', {templateUrl: 'views/summary.html',controller: 'SummaryCtrl'})
      .otherwise({redirectTo: '/'});
  });
