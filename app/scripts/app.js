'use strict';

angular
  .module('phonecatApp', [
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
  });
