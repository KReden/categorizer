var catagorizerApp = angular.module('app', [
  'ngRoute', 
  'ngResource',
  'catagorizerControllers',
  'catagorizerServices'
]);

catagorizerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl'
  }).when('/movies', {
    templateUrl: 'partials/movies.html',
    // controller: 'MovieListCtrl'
  }).when('/movies/:id', {
    templateUrl: 'partials/movie-detail.html',
    controller: 'MovieDetailCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);