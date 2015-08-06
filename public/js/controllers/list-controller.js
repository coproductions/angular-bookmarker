'use strict';

angular.module('myApp')
  .controller('listController', [
    '$scope',
    'LinkService',

    function($scope, LinkService){
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

      $scope.sortByRating = function(){
        console.log('sorting')
        LinkService.getAllLinks('rating','dsc').then(function(response){
        $scope.allLinks = response;
        })
      }

      $scope.sortByDate = function(){
        console.log('sorting')
        LinkService.getAllLinks('created_at','dsc').then(function(response){
        $scope.allLinks = response;
        })
      }

      $scope.deleteLink = function(id){
        LinkService.deleteLink(id);
        $scope.allLinks.data = $scope.allLinks.data.filter(function(link){
          return link._id !== id;
        })
      }

      $scope.nrOfComments = function(id){
        LinkService.getComments(id).then(function(res){

          console.log('comment nr:',res.data.length)
          $scope.commentNr = res.data.length;
        });

      }

    }
    ])