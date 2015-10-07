'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitarCenterApp
 */
 angular.module('guitarCenterApp')
 
 .controller('MainCtrl', function ($scope) {
  $scope.images = [{
    /*src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-singer-songwriter-5-10-01-15.jpg',*/
    src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-singer-songwriter-5-10-01-15.jpg',
    title: 'Pic 1'
  }, {
    src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-moog-mother-10-01-15.jpg',
    title: 'Pic 2'
  }, {
    src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-singer-songwriter-solutions-10-01-15.jpg',
    title: 'Pic 3'
  }, {
    src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-electricacoustic-guitar-deals-10-01-15.jpg',
    title: 'Pic 4'
  }, {
    src: 'http://static.guitarcenter.com/static/gc/selects/2015/d-home/gc-md-hf-gc-exclusive-10-02-15.jpg',
    title: 'Pic 5'
  }];
});



  
