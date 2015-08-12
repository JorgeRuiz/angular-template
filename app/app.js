'use strict';

var angular = require('angular');

require('view1');
require('view2');
require('login');

// var ngMoudle =

// Declare app level module which depends on views, and components
// var battlrApp =

angular.module('battlrApp', [
  'ngRoute',
  'battlrApp.view1',
  'battlrApp.view2',
  'battlrApp.version'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/login'
    });
  }
]);