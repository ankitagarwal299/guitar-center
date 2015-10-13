'use strict';

angular.module('guitarCenterApp')

.factory('guitar',['$http',function($http){
  return $http.get('guitardata.json')
  .success(function(data){
    return data;
  })
  .error(function(err){
  return err;
  })
}]);