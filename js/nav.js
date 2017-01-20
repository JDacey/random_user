app.config(function($routeProvider) {
    $routeProvider
    .when("/user_details", {
      templateUrl: "views/user_details.html",
      controller: "userDetailCtrl"
    })
    .when("/", {
      templateUrl : "views/users.html"
    })
    .when("/home", {
      templateUrl : "views/users.html"
    })
    .otherwise({
      templateUrl: "views/users.html"
    });
});
