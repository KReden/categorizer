var catagorizerApp = angular.module('app', [
  'ngRoute', 
  'ngResource',
  'catagorizerControllers',
  'catagorizerServices'
]);

catagorizerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl'
  }).when('/:category', {
    templateUrl: 'partials/movies.html',
    // controller: 'MovieListCtrl'
  }).when('/:category/:id', {
    templateUrl: 'partials/movie-detail.html',
    controller: 'MovieDetailCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);