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
        })


      $('.edit-link-slider-container').mouseup(function(){
        LinkService.updateLinkById($routeParams.linkId,{rating:$('#slider').attr('data-slider')})
      })



    }
  ]);