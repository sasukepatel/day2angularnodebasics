

angular
  .module('myapp')
  .factory('UserFactory', function UserFactory () {
  var UserFactory = {};
  
  UserFactory.sayHello = function (name) {
    return "Hello " + name;
  };
  
//   UserFactory.getUsers = function(){
//       //call REST api.
//       return users;
//   }
  
  //return the object
  return UserFactory;
});