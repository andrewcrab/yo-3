'use strict';

/**
 * @ngdoc function
 * @name yo3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yo3App
 */
angular.module('yo3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
