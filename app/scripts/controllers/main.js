'use strict';

angular.module('phonecatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json')
      .success(function(data) {
        console.log('Phone data fetched successfully.');
        //data.splice(5);
        $scope.phones = data;
      })
      .error(function() {
        console.error('Failed to fetch phone data.');
      });
    $scope.orderProp = 'age';
    $scope.name = 'world';
  }]);
