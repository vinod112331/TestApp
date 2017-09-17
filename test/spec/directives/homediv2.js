'use strict';

describe('Directive: homediv2', function () {

  // load the directive's module
  beforeEach(module('sampleAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<homediv2></homediv2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the homediv2 directive');
  }));
});
