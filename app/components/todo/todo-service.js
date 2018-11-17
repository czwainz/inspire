
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/chrissy/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log(res)
				todoList = res.data.data
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		console.log('adding to the todo list')
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				console.log(res)
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todo, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		// let thisTodo = {}
		// todoList.forEach(todo => {
		// 	if (todo.id == todoId) {
		// 		thisTodo = todo;
		// 	}
		// }); ///MODIFY THIS LINE

		// if (!thisTodo.completed) {
		// 	thisTodo.completed = true;
		// }
		// else {
		// 	thisTodo.completed = false;
		// }

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todo._id, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos();
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			})
		// Umm this one is on you to write.... The method is a DELETE
	}

}
