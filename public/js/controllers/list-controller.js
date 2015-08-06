'use strict';

angular.module('myApp')
  .controller('listController', [
    '$scope',
    'LinkService',


    function($scope, LinkService){
      angular.element(document).ready(function(){
        $(document).foundation();

      })

      LinkService.getAllLinks('created_at','dsc').then(function(response){
        $scope.allLinks = response.data;
        addCommentNr($scope.allLinks);
      })

      $scope.orderParam = '-created_at';
      $scope.order = function(param){
        $scope.orderParam = param;
      }

      function addCommentNr(arrayOfLinks){
        arrayOfLinks.forEach(function(link){
          LinkService.getComments(link._id)
            .then(function(res){
              link.commentNr = res.data.length;
            })
        })
      }

      $scope.addLink = function(){
        var newLink = $('#url-input').val()
         LinkService.addLink(newLink, function(response){
          $scope.allLinks.unshift(response.data);
         });
      }


      $scope.deleteLink = function(id){
        LinkService.deleteLink(id);
        $scope.allLinks = $scope.allLinks.filter(function(link){
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