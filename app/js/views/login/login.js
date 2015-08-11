'use strict';


////////////////////////////////////////////////////////////////////
/// U S E  L I K E  T H I S
////////////////////////////////////////////////////////////////////
///
///  Module: nameApp.module
///  View: name.html
///  Controller: nameCtrl
///
////////////////////////////////////////////////////////////////////


// <Module>
angular.module('battlrApp.login', ['ngRoute'])

// <Config>
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });

}])

// <Controller>
.controller('loginCtrl', [function() {

  alert('Login is working.');

}]);