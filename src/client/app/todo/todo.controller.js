angular.module('app')
  .controller('TodoController', TodoController);

function TodoController(dataservice, localstorage) {
  var todoList = this;

  todoList.addTodo = function() {
    todoList.todos.push({ title: todoList.todoText });
    localstorage.push('userTodos', { title: todoList.todoText })

    todoList.todoText = '';
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
  };

  function activate() {
    dataservice.listTolkbacks().then((data) => {
      var userTodos = localstorage.retrieve('userTodos');
      todoList.todos = data.concat(userTodos);
    })
  }

  activate();
};
