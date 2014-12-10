var app = angular.module("shoppingList", [
  "templates"
])
app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "templates/main.html",
      controller: "MainController"
    })
})

app.factory("List", ["$resource", function($resource){
  return $resource("/api/lists/:id", null, {
    "update": { method: "PUT" }
  })
}])
