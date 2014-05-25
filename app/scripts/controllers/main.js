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
      {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
      {'name': 'Motorola XOOM with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.'},
      {'name': 'MOTOROLA XOOM', 'snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.name = 'world';
  });
