'use strict';

angular.module('phonecatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/phones', {
        templateUrl: 'views/phones.html',
        controller: 'PhoneListCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/phones'
      });
  })
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  })
  .factory('Phone', ['$resource', function($resource) {
    return $resource('phones/:phoneId.json', {}, {
      query: { 
        method: 'GET', 
        params: { phoneId:'phones' }, 
        isArray: true 
      }
    });
  }]);
