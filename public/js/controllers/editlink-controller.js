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
          console.log(res.data)
        })

       $scope.saveTag = function(event){
        if(event.keyCode === 13){
          console.log('tag input: ',$scope.tagInputValue)
          // LinkService.updateLinkById($routeParams.linkId,{tag:})
        }

       }

       $scope.addComment = function(event){
        if(event.keyCode === 13){
          console.log('adding comment:',$scope.commentInput)
          var newComment = {
            linkItem_id : $routeParams.linkId,
            user_id : "55c1909eff41aa7cbde0096f",
            body: $scope.commentInput
          }
          CommentService.addComment(newComment,function(response){
            console.log('the comment put response:',response)
          })
        }
       }


      $('.edit-link-slider-container').mouseup(function(){
        LinkService.updateLinkById($routeParams.linkId,{rating:$('#slider').attr('data-slider')})
      })



    }
  ]);