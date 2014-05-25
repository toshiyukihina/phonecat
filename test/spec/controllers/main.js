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
  var ctrl, scope, $httpBackend;

  beforeEach(module('phonecatApp'));

  beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json')
      .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    scope = $rootScope.$new();
    ctrl = $controller('PhoneListCtrl', { $scope: scope });
  }));

  it ('should create "name" model with "world"', function() {
    expect(scope.name).toBe('world');
  });

  it ('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });

  it ('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(scope.phones).toBeUndefined();

    $httpBackend.flush();
    expect(scope.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });
});
