'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('phonecatApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

describe('PhoneListCtrl', function() {
  var ctrl, scope;

  beforeEach(module('phonecatApp'));

  beforeEach(inject(function($controller) {
    //scope = $rootScope.$new();
    scope = {};
    ctrl = $controller('PhoneListCtrl', { $scope: scope });
  }));

  it ('should create "phones" model with 3 phones', function() {
    expect(scope.phones.length).toBe(3);
  });

  it ('should create "name" model with "world"', function() {
    expect(scope.name).toBe('world');
  });

  it ('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});
