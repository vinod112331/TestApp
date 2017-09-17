'use strict';

describe('Directive: homediv1', function () {

  // load the directive's module
  beforeEach(module('sampleAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<homediv1></homediv1>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the homediv1 directive');
  }));
});
