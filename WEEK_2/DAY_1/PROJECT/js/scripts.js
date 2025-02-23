// HEADING
const getDay = () => {
  return new Date().toLocaleString("default", { weekday: "long" });
};
let WRAPPER_HEADING = document?.getElementById("wrapper-heading");
WRAPPER_HEADING.innerHTML = `Hello User Today Is ${getDay()}`;

// MAIN
let WRAPPER_DATA = document.getElementById("wrapper-data");
let INPUT_FIELD = document.getElementById("input-field");
let isEditing = false; // Track if we're in edit mode
let editingTaskId = null; // Track the ID of the task being edited

// FOR GETTING DATA EVEN AFTER REFRESHING
window.onload = () => {
  renderDataFromLocalStorage();
};

// HANDLE SUBMIT
const handleSubmit = (event) => {
  event.preventDefault();

  const getInput = getData(event);

  if (isEditing) {
    // If in edit mode, update the task
    updateTask(editingTaskId, getInput);
    isEditing = false; // Exit edit mode
    editingTaskId = null; // Clear editing task ID
  } else {
    // If not in edit mode, add a new task
    pushDataToLocalStorage(getInput);
  }

  // Render data and clear input field
  renderDataFromLocalStorage();
  INPUT_FIELD.value = "";
};

/////// REUSABLE FUNCTIONS ///////

// GETTING THE DATA
const getData = (event) => {
  return event.target[0].value;
};

// PUSHING DATA TO LOCAL STORAGE
const pushDataToLocalStorage = (getInput) => {
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    id: Date.now(), // Unique ID
    task: getInput,
  };
  existingTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
};

// RENDERING DATA
function renderDataFromLocalStorage() {
  WRAPPER_DATA.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const newElement = createElement("p");
    newElement.textContent = `${task.task}`;

    const editButton = createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = () => editTask(task.id);

    const deleteButton = createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => deleteTask(task.id);

    // Append buttons to the task
    newElement.appendChild(editButton);
    newElement.appendChild(deleteButton);

    WRAPPER_DATA.appendChild(newElement);
  });
}

// CREATING NEW ELEMENT
const createElement = (elementName) => {
  return document.createElement(elementName);
};

// EDIT FUNCTIONALITY
const editTask = (taskId) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskToEdit = tasks.find((task) => task.id === taskId);

  if (taskToEdit) {
    isEditing = true; // Set edit mode
    editingTaskId = taskId; // Store the task ID being edited
    INPUT_FIELD.value = taskToEdit.task; // Populate the input field with the current task
    INPUT_FIELD.focus(); // Bring focus to the input field
  }
};

// UPDATE TASK FUNCTION
const updateTask = (taskId, newTask) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1 && newTask.trim() !== "") {
    tasks[taskIndex].task = newTask; // Update the task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks to localStorage
  } else if (newTask.trim() === "") {
    alert("Task cannot be empty!");
  }
};

// DELETE FUNCTIONALITY
const deleteTask = (taskId) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  renderDataFromLocalStorage();
};
