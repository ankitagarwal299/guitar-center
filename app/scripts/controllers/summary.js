'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:SummaryctrlCtrl
 * @description
 * # SummaryctrlCtrl
 * Controller of the guitarCenterApp
 */
 angular.module('guitarCenterApp')
 .controller('SummaryCtrl', function ($scope,$location,guitar,$routeParams,orderDeatils) {

 	guitar.success(function(data){
 		$scope.prod1 = data.allProducts[$routeParams.id];
 	});


 	 $scope.Name = orderDeatils.Name;
     $scope.email = orderDeatils.email;
     $scope.tel = orderDeatils.tel;
     $scope.number = orderDeatils.number;
 });
