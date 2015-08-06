'use strict';

angular.module('myApp',[
  'ngRoute',
  'angularMoment'
  ])
  .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });



  $routeProvider
      .when('/', {
        templateUrl : '/views/list.html',
        controller : 'listController'
      })
      .when('/list', {
        templateUrl : '/views/list.html',
        controller : 'listController'
      })
      .when('/login', {
        templateUrl : '/views/login.html',
        controller : 'loginController'
      })
      .when('/editlink/:linkId', {
        templateUrl : '/views/editlink.html',
        controller : 'editlinkController'
      })
      .otherwise({
        templateUrl : '/views/404.html'
      })
  }])
  .run(['$rootScope',
    function(){

  }]);