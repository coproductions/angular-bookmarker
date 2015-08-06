'use strict';

angular.module('myApp')
  .controller('UserController', function($scope, $http, $window) {

    $scope.user = {};
    $scope.message = '';
    $scope.submit = function() {

      $http.post('/authenticate', $scope.user)
        .success(function(data,status,headers,config) {

          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome';
        })

        .error(function(data,status,headers,config) {

          delete $window.sessionStorage.token;

          $scope.message = 'Error: Invalid user or password';
        });
    };
  });