'use strict';

describe('Controller: ProductCtrl', function () {

  // load the controller's module
  beforeEach(module('guitarCenterApp'));

  var ProductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductCtrl = $controller('ProductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

 
});
