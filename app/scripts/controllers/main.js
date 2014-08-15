'use strict';


angular.module('yo3App')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
        "Item 1",
        "Item 2",
        "Item 3"
    ];
  });
