'use strict';

angular.module('phonecatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
      {'name': 'Nexus S',
       'snippet': 'Fast just got faster with Nexus S.',
       'age': 1},
      {'name': 'Motorola XOOM with Wi-Fi',
       'snippet': 'The Next, Next Generation tablet.',
       'age': 2},
      {'name': 'MOTOROLA XOOM',
       'snippet': 'The Next, Next Generation tablet.',
       'age': 3}
    ];
    $scope.orderProp = 'age';
    $scope.name = 'world';
  });
