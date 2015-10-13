'use strict';

describe('Filter: shipppingFilter', function () {

  // load the filter's module
  beforeEach(module('guitarCenterApp'));

  // initialize a new instance of the filter before each test
  var shipppingFilter;
  beforeEach(inject(function ($filter) {
    shipppingFilter = $filter('shipppingFilter');
  }));

  it('should return the input prefixed with "shipppingFilter filter:"', function () {
    var text = 'angularjs';
    expect(shipppingFilter(text)).toBe('shipppingFilter filter: ' + text);
  });

});
