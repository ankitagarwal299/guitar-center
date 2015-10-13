'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:ProductctrlCtrl
 * @description
 * # ProductctrlCtrl
 * Controller of the guitarCenterApp
 */		
angular.module('guitarCenterApp')
  .controller('ProductCtrl', 

  	function ($scope,$location,guitar,$routeParams,orderDeatils) {
    
    guitar.success(function(data){
         $scope.prod = data.allProducts[$routeParams.id];
  		});

    $scope.buy = function (){
         $location.path('/product/buy/');

          	orderDeatils.Name = $scope.firstName + $scope.lastName;
    orderDeatils.email = $scope.email ;
    orderDeatils.tel = $scope.tel;
    orderDeatils.number = $scope.number;

        /*$scope.Name = $scope.firstName + $scope.lastName;
 		console.log($scope.Name);*/



      }
  });
