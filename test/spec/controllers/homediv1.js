'use strict';

describe('Controller: Homediv1Ctrl', function () {

  // load the controller's module
  beforeEach(module('sampleAppApp'));

  var Homediv1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Homediv1Ctrl = $controller('Homediv1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Homediv1Ctrl.awesomeThings.length).toBe(3);
  });
});
