'use strict';

var catagorizerServices = angular.module('catagorizerServices', ['ngResource']);

catagorizerServices.factory('Movie', ['$resource',
  function($resource){
    return $resource('http://localhost:3000/api/v1/movies/:id', {}, {
      query: { method: 'GET', params:{id: '' }, isArray:true }
    });
  }]);