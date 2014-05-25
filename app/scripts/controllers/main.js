'use strict';

angular.module('phonecatApp')
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
    $scope.now = new Date();
  }])
  .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $scope.phoneId = $routeParams.phoneId;
    $http.get('phones/' + $routeParams.phoneId + '.json')
      .success(function(data) {
        console.log('Phone\'s detail data fetched successfully.');
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
      })
      .error(function() {
        console.error('Failed to fetch phone\'s detail data.');
      });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
