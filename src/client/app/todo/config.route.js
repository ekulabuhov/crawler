(function() {
  'use strict';

  angular
    .module('app')
    .config(appRun);

  function appRun($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/todo/todo.html',
      controller: 'TodoController',
      controllerAs: 'todoList',
      title: 'Todo'
    })
  }
})();
