'use strict';

angular.module('myApp')
  .controller('editlinkController', [
    '$scope',
    '$routeParams',
    'LinkService',
    function($scope,$routeParams,LinkService){

       angular.element(document)
        .ready(function(){
          $(document).foundation();
        })


      LinkService.getLinkById($routeParams.linkId)
        .then(function(res){
          $scope.link = res.data;
          $('#slider').foundation('slider', 'set_value', res.data.rating);
          console.log('response link by id',res.data, res.data.rating)
        })


      $('.edit-link-slider-container').mouseup(function(){
        console.log('slider changing',$('#slider').attr('data-slider'),this)
        LinkService.updateLinkById($routeParams.linkId,{rating:$('#slider').attr('data-slider')})
      })



    }
  ]);