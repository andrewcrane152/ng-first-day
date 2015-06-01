var app = angular.module('todoApp');

app.controller('mainController', function($scope){
  $scope.isVisible = true;

  $scope.toggle = function(){
    $scope.isVisible = !$scope.isVisible;
  };

  $scope.title = "Work Todo List";

  $scope.list = [
    'Build a new Queue',
    'Talk to Cahlan',
    'Review Lessons',
    'Talk to Jacob',
  ];

  $scope.addItem = function(){
    if($scope.newItem){
      $scope.list.push($scope.newItem);
      $scope.newItem = '';
    }
  };

  $scope.removeItem = function(){
    var index = $scope.list.indexOf($scope.thingToRemove);
    if(index !== -1){
      $scope.list.splice(index, 1);
      $scope.thingToRemove = '';
    }
  };
});