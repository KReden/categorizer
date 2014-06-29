'use strict';

var catagorizerControllers = angular.module('catagorizerControllers', []);

catagorizerControllers.controller('TabCtrl', ['$scope' , function($scope){
  this.tab = 1;

  this.setTab = function(tab){
    // TODO: Add functionality to set active class on currently active tab.
    // Why is this not working????
    this.tab = tab;
  };
  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };
}]);

catagorizerControllers.controller('MovieListCtrl', ['Movie', '$scope', function(Movie, $scope){
  // TODO: Flesh out this controller
  $scope.movies = Movie.query();
}]);

catagorizerControllers.controller('MovieDetailCtrl', ['Movie', '$scope', '$routeParams', function(Movie, $scope, $routeParams) {
    

    $scope.movie = Movie.get({id: $routeParams.id }, function(movie) {
      // Probably do something cool in here with the returned movie data.
    })
    // $scope.movieId = $routeParams.movieId;
}]);

// Eventually this will all be abstracted out into a generic controller that all calls can use.