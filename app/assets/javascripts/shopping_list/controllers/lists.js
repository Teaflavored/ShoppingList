angular.module("shoppingList")
  .controller("MainController", ["$scope", "List", function($scope, List){
    $scope.lists = List.query()
  }])
