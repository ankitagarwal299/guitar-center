'use strict';

describe('Service: orderDeatils', function () {

  // load the service's module
  beforeEach(module('guitarCenterApp'));

  // instantiate service
  var orderDeatils;
  beforeEach(inject(function (_orderDeatils_) {
    orderDeatils = _orderDeatils_;
  }));

  it('should do something', function () {
    expect(!!orderDeatils).toBe(true);
  });

});
