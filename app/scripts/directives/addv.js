'use strict';

/**
 * @ngdoc directive
 * @name sampleAppApp.directive:addv
 * @description
 * # addv
 */
angular.module('sampleAppApp')
  .directive('addv', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/products.html',
     };
  });
