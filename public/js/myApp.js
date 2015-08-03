'use strict';

angular.module('myApp',[
  'ngRoute',
  'ngAnimate'
  ])
  .config([function(){

  $routeProvider
      .when('/', {
        templateUrl : 'views/default.html'
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
  }]);
  .run(['$rootScope',
    function(){

  }]);