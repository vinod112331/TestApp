'use strict';

/**
 * @ngdoc directive
 * @name sampleAppApp.directive:homediv1
 * @description
 * # homediv1
 */
angular.module('sampleAppApp')
  .directive('homediv1', function () {
    return {
      restrict: 'E',
      templateUrl:'views/homediv1.html',
      };
  });
