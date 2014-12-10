var app = angular.module("shoppingList", [
  "ngResource",
  "ngRoute",
  "templates"
])

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
      controller: "MainController"
    })
    .when("/auster",{
      templateUrl: "auster.html",
    })
})

app.factory("List", ["$resource", function($resource){
  return $resource("/api/lists/:id", null, {
    "update": { method: "PUT" },
    "show": { method: "GET" }
  })
}])
