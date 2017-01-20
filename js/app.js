var app = angular.module('myApp', ['ngRoute']);
app.config(function($locationProvider){
  $locationProvider.html5Mode(false);
});
app.factory('UserService',function(){
  var data = {};
  var Service = {};

  return Service = {
    setUserData: function(data){
      this.data = data;
    },
    getUserData: function(){
      return this.data;
    }
  }
})
app.controller('userCtrl', function($scope, $http, $routeParams, $location, UserService) {
    $http.get("https://randomuser.me/api/?results=15")
    .then(function(response) {
      $scope.userData = response.data.results;
    });

    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
      $scope.sortReverse  = false;  // set the default sort order
      $scope.searchUsers   = ''
    }

    $scope.showUserDetail = function(obj){
      UserService.setUserData(obj);
      // return JSON.stringify(obj);
      $location.url('/user_details');
    }

})
.controller('userDetailCtrl', function($scope, $http, $routeParams, UserService) {
  $scope.user  = UserService.getUserData();
});
