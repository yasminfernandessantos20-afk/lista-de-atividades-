const form = document.getElementById('form')
const input = document.getElementsByClassName('input')
const todoUL = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))}