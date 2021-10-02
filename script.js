const form = document.querySelector('#task-form');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.btn-clear');
const filter = document.querySelector('.filter');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add a task event
    form.addEventListener('submit', addTask);
    // Remove a task event
    taskList.addEventListener('click', removeTask);
    // Clear all task event
    clearBtn.addEventListener('click', clearTasks);
    // Clear all task event
    filter.addEventListener('keyup', filterTasks);
}

// Add Task function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }




  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item';
  // Add icon html 
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
}




// Remove Task function
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}


// Clear all Tasks function
function clearTasks(e) {
    taskList.textContent = '';
}



// Filter all Tasks function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {    // if no match
            task.style.display = 'block';    // then show
        } else {
            task.style.display = 'none';    // otherwise don't show
        }
    });
}


