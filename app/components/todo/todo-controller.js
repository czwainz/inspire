import TodoService from "./todo-service.js";


var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	console.log(todos)
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	var template = ''
	let todocount = 0
	todos.forEach(todo => {
		template += `
		<div class="col-3 my-2" style="width: 18rem;">
			<div class="card">
				<div class="card-body">
					<h4 class="${todo.completed ? "strike-out" : ''}"> <input type="checkbox" ${todo.completed ? "checked" : ''} name="todo" id="${todo._id}" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"> ${todo.description}</h4>
					<button onclick="app.controllers.todoController.removeTodo('${todo._id}')" class="trashcan"><i class="fas fa-trash-alt"></i></button>
				</div>
			</div>
		</div>
		`
		todocount++
	});
	document.getElementById('todo').innerHTML = template
	document.getElementById('todocount').innerText = JSON.stringify(todocount)
}

export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		let updatedInfo = {
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		todoService.toggleTodoStatus(updatedInfo, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

}
