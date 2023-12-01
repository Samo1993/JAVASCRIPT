const addProduct = () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const newTask = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  newTask.innerText = taskInput.value;
  newTask.prepend(checkbox);

  taskList.appendChild(newTask);
  taskInput.value = '';
}
