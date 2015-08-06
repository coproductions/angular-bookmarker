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

      LinkService.getAllLinks('created_at','dsc').then(function(response){
        $scope.allLinks = response;
      })

      $scope.addLink = function(){
        var newLink = $('#url-input').val()
       LinkService.addLink(newLink, function(response){
        $scope.allLinks.data.unshift(response.data);
       });




      }
    }
    ])