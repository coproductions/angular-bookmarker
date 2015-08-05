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
        $scope.allLinks = response;
      })

      $scope.addLink = function(){
        var newLink = $('#url-input').val()
       LinkService.addLink(newLink, function(response){
        console.log('testing callback',response)
        console.log($scope.allLinks.data)
        // $scope.allLinks.data.push(response)
       });



      }
    }
    ])