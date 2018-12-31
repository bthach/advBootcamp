$(document).ready(function(){
    $.getJSON("/api/todo")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which === 13) {
            createTodo();
        }
    })

    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    })

    $('.list').on('click', 'span', function(event) {
        event.stopPropagation(); // stops from triggering parent li
        removeTodo($(this).parent());
    })
});

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    })
}

function addTodo(todo)  {
    var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    $('.list').append(newTodo);
    if(todo.completed) {
        newTodo.addClass("done");
    }
}       

function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('/api/todo', {name: usrInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todo/' + clickedId
    })
    .then(function(data){
        todo.remove();
    })
}

function updateTodo(todo) {
    var clickedId = todo.data('id');
    var isComplete = !todo.data('completed');
    var update = {completed: isComplete};

    $.ajax({
        method: 'PUT',
        url: '/api/todo/' + clickedId,
        data: update
    })
    .then(function(updatedTodo) {
        todo.toggleClass("done");
        todo.data('completed', isComplete);
    })
}