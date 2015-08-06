'use strict';

(function() {

  function LinkService($http) {

    this.getLinksByTag = function(tag){

    }

    this.getAllLinks = function(sortBy,sortOrder){
      if(sortBy && sortOrder){
        return $http.get('http://localhost:3000/api/linkItems/'+sortBy +'/' + sortOrder)
      }
      else{

        return  $http.get('http://localhost:3000/api/linkItems');
      }

    }

    this.getLinkById = function(id){
       return  $http.get('http://localhost:3000/api/linkItems/'+id);
    }

    this.updateLinkById = function(id,obj){
      $http.put('http://localhost:3000/api/linkItems/'+id , obj)
        .then(function(res){
          console.log('put response',res)
        })
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

    this.getComments = function(id){
      return $http.get('http://localhost:3000/api/linkItems/'+id+'/comments')
    }

  };

  angular.module('myApp').service('LinkService',['$http',LinkService]);

  function CommentService($http) {


    this.addComment = function(obj,callback){
      $http.post('http://localhost:3000/api/comments',obj)
        .then(function(res){
          callback(res);
        }, function(res){
          console.log('error',res)
        })
    }

  };

  angular.module('myApp').service('CommentService',['$http',CommentService]);
})()