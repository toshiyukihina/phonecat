'use strict';

angular.module('phonecatApp')
  .controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.name = 'world';
    $scope.now = new Date();
  }])
  .controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
