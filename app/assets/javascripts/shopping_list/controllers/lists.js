angular.module("shoppingList")
  .controller("MainController", ["$scope", "$http", "List", function($scope, $http, List){
    window.scope = $scope;
    $scope.lists = List.query();

    $scope.master = {};

    $scope.createList = function(list){
      $scope.master = angular.copy(list)

      $http.post("api/lists", $scope.master).success(function(data, status, headers){
        $scope.lists.push(data)
      })
    }

  }])
