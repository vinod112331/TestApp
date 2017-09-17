'use strict';

describe('Directive: addv', function () {

  // load the directive's module
  beforeEach(module('sampleAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<addv></addv>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addv directive');
  }));
});
