'use strict';

angular.module('myApp')
  .controller('listController', [
    '$scope',
    'LinkService',

    function($scope,LinkService){
      angular.element(document).ready(function(){
        $(document).foundation();

      })
      $scope.hello = 'goodbye';

      LinkService.getAllLinks().then(function(response){
        console.log(response);
        $scope.allLinks = response;
      })

    }
    ])