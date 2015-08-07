'use strict';

angular.module('myApp')
  .controller('editlinkController', [
    '$scope',
    '$routeParams',
    'LinkService',
    'CommentService',
    function($scope, $routeParams, LinkService, CommentService){

       angular.element(document)
        .ready(function(){
          $(document).foundation();
        })


      LinkService.getLinkById($routeParams.linkId)
        .then(function(res){
          $scope.link = res.data;
          console.log('this link',res.data)
          $('#slider').foundation('slider', 'set_value', res.data.rating);
        })

      LinkService.getComments($routeParams.linkId)
        .then(function(res){
          $scope.allComments = res.data;
        })

      function addUsernames(commentArray){
        commentArray.forEach(function(comment){
          LinkService.gitLinkById(comment.user_id)
            .then(function(res){
              comment.username = res.data.username;
            })
        })
      }

       $scope.saveTag = function(event){
        if(event.keyCode === 13){
          console.log('tag input: ',$scope.tagInputValue)
          // LinkService.updateLinkById($routeParams.linkId,{tag:})
        }

       }

       $scope.addComment = function(event){
        if(event.keyCode === 13){
          var newComment = {
            linkItem_id : $routeParams.linkId,
            user_id : "55c1909eff41aa7cbde0096f",
            body: $scope.commentInput
          }
          CommentService.addComment(newComment,function(response){
            $scope.allComments.push(response.data);
            $scope.commentInput = '';
          })
        }
       }




      $('.edit-link-slider-container').mouseup(function(){
        console.log('fired mouseup')
        LinkService.updateLinkById($routeParams.linkId,{rating:$('#slider').attr('data-slider')})
      })



    }
  ]);