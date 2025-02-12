const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=20';
const todoList = document.getElementById('todoList');

let todos = [];

// Fetch initial todos
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    todos = data;
    renderTodos();
  })
  .catch(error => console.error('Error fetching todos:', error));

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.setAttribute('data-id', todo.id); // Add data-id attribute

    li.innerHTML = `
      <span>${todo.title}</span>
      <button class="complete" onclick="toggleComplete(${todo.id})">✔</button>
      <button class="edit" onclick="editTodo(${todo.id})">EDIT</button>
      <button class="delete" onclick="deleteTodo(${todo.id})">✖</button>
    `;

    todoList.appendChild(li);
  });
}

function addTodo() {
  const newTodoInput = document.getElementById('newTodo');
  const newTodoText = newTodoInput.value.trim();

  if (newTodoText) {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoText,
      completed: false,
    };
    todos.unshift(newTodo);
    renderTodos();
    newTodoInput.value = '';
  }
}

function toggleComplete(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

function editTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return;

  const li = document.querySelector(`li[data-id="${id}"]`);
  if (!li) return;

  const todoText = li.querySelector('span');

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = todo.title;

  li.replaceChild(inputField, todoText);

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.className = 'save';
  saveButton.onclick = function () {
    todo.title = inputField.value.trim();
    li.replaceChild(todoText, inputField);
    li.removeChild(saveButton);
    renderTodos();
  };

  li.appendChild(saveButton);
}