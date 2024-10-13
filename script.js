document.addEventListener('DOMContentLoaded', function() {
    // Selects DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // added an addTask function
    function addTask() {
        // helps in retrieving and trimming the value from the task input field
        const taskText = taskInput.value.trim();

        // Checks if the taskText is not empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new list element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Creates a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button to omit the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li> and the <li> to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    // Add 'keypress' event listener to the task input field to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
