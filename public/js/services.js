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
        .success(function(res){
          console.log('success: ',res)
        })
        .error(function(err){
          console.log('error:',err)
        })
    }

    this.addLink = function(input,callback){
      //currentty working here
      $http.post('http://localhost:3000/api/linkItems',{
        title: "",
        url: input,
        rating: 50,
        user_id: "55c1909eff41aa7cbde0096f"
      }).then(function(res){
        callback(res)
      }, function(res){
        console.log('error',res)
      })

    }

    this.deleteLink = function(id){
      $http.delete('http://localhost:3000/api/linkItems/'+id)
        .then(function(res){
          console.log('deleted',res)
        })
    }

    this.getComments = function(id){
      return $http.get('http://localhost:3000/api/linkItems/'+id+'/comments')
    }

    this.addTag = function(id, tag){
      var tagObj = {"tags":[tag]};
      tagObj = JSON.stringify(tagObj);
      // tagObj = JSON.parse(tagObj);
      console.log('tagobj', id ,tagObj)
      $http.put('http://localhost:3000/api/linkItems/'+id , tagObj)
        .success(function(res){
          console.log('put tag',res);
        })
        .error(function(err){
          console.log('error:',err)
        })
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