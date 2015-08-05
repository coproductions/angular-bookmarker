'use strict';

(function() {

  function LinkService($http) {

    this.getLinksByTag = function(tag){

    }

    this.getAllLinks = function(){
      return  $http.get('http://localhost:3000/api/linkItems');

    }

    this.getLinkById = function(){

    }

    this.addLink = function(input,callback){
      console.log('adding link',input)
      //currentty working here
      $http.post('http://localhost:3000/api/linkItems',{
        title: "",
        url: input,
        user_id: "55c1909eff41aa7cbde0096f"
      }).then(function(res){
        callback(res)
      }, function(res){
        console.log('error',res)
      })

    }

  };

  angular.module('myApp').service('LinkService',['$http',LinkService]);

  function CommentService() {

  };

  angular.module('myApp').service('CommentService',[CommentService]);
})()