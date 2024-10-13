document.addEventListener('DOMContentLoaded', function() {
    // Selects DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // updated the addTask function to allow to show the list of saved tasks
    function addTask(taskText, save=true) {
        // helps in retrieving and trimming the value from the task input field
        const taskText = taskInput.value.trim();
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));

        // Checks if the taskText is not empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;

        }

        tasks.push(taskText);

        createTaskElement(taskText);

        taskInput.value='';

        saveTasks();

        // Create a new list element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className= classList.add;
        function removeTask(li, taskText) {
            taskList.removeChild(li); // Remove the <li> from the task list
            tasks = tasks.filter(task => task !== taskText); // Remove the task from the array
            saveTasks(); // Update Local Storage
        }
        // Creates a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        // sets the class name directly
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
    function removeTask(li, taskText) {
        taskList.removeChild(li); // Remove the <li> from the task list
        tasks = tasks.filter(task => task !== taskText); // Remove the task from the array
        saveTasks(); // Update Local Storage
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks when the page is loaded
    loadTasks();
    // Attach event listeners
    addButton.addEventListener('click', addTask);

    

    // Add 'keypress' event listener to the task input field to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }

        


       
    });
}});
