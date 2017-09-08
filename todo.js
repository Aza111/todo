var app = angular.module('todoApp', ['firebase']);
var txtTodo = document.getElementById('txtTodo');

app.controller('TodoController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('todos');
    $scope.todos = $firebaseArray(ref);

    $scope.send = function() {
        $scope.todos.$add({
            todo: $scope.todoText,
            date: Date.now()
        });
        $scope.todoText = ' ';
    }

});
