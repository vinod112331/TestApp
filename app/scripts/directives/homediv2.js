'use strict';

/**
 * @ngdoc directive
 * @name sampleAppApp.directive:homediv2
 * @description
 * # homediv2
 */
angular.module('sampleAppApp')
  .directive('homediv2', function () {
    return {
      restrict: 'E',
      templateUrl:'views/homediv2.html',
      };
  });
