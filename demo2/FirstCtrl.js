angular.module('myapp')

.controller('FirstCtrl',function($scope,UserFactory){
    
    //first
    $scope.name = "My name is Joey!";

    //second
    $scope.sayName = function(name){
        alert(name);
    }
    
    $scope.hello = function(name){
        alert(UserFactory.sayHello(name));
    }
    
    //Third
     $scope.users = [{
    name: 'Ross',
    id: 10
  },{
    name: 'Rachel',
    id: 20
  },{
    name: 'Phebe',
    id: 2389017
  },{
    name: 'Joey',
    id: 1000983
  },{
    name: 'Monica',
    id: 50
  }];

    
    
})