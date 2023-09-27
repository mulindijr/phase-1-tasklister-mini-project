document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.querySelector('#new-task-description');
    const taskDescription = taskInput.value;

    //create delete button
    const handleDelete = (e) => {
      e.target.parentNode.remove();
    }

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', handleDelete)

    //trim() is used to remove leading and trailing whitespace
    if (taskDescription.trim() !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = `${taskDescription} `
      listItem.append(deleteBtn)

      // Append the new task to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      form.reset();//taskInput.value = '';
    }
  });
});
