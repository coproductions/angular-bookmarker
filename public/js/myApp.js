'use strict';

angular.module('myApp',[
  'ngRoute'
  ])
  .config(['$routeProvider',function($routeProvider){

  $routeProvider
      .when('/', {
        templateUrl : 'views/list.html'
      })
      .when('/list', {
        templateUrl : 'views/list.html',
        controller : 'list'
      })
      .when('/login', {
        templateUrl : 'views/login.html',
        controller : 'login'
      })
      .when('/editlink', {
        templateUrl : 'views/editlink.html',
        controller : 'editlink'
      })
      .otherwise({
        templateUrl : 'views/404.html'
      })
  }])
  .run(['$rootScope',
    function(){

  }]);