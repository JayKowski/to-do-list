import * as Storage from './storage';

// ## PHASE 1
// Add event listener for new project and publish the results to the DOM -- //

// Add event listener for new task input form for adding newly created tasks to the DOM

// ## PHASE 2
// Change background of task upon being chekced as complete
// deleting a task from the DOM
// deleting project from DOM

// ## PHASE 3
// reveal/hide new project form
// expand/contract project view (hiding the form and the tasks)

// /////////// const myProjects = []; /////////////////

// Should be in it's own module file
function TaskDetails(name, date, priority, completed) {
  this.taskName = name;
  this.dueDate = date;
  this.priority = priority;
  this.completed = completed;
}

function Project(name, description) {
  this.name = name;
  this.description = description;
  this.tasks = [];
}

function createNewProjectForm(attatchTo) {
  const createForm = document.createElement('form');
  createForm.className += 'new-task';
  const h3 = document.createElement('h3');
  h3.innerText = 'New Task';
  // label plus input field for TASK-NAME:
  const taskInputLabel = document.createElement('label');
  taskInputLabel.setAttribute('for', 'task-name');
  taskInputLabel.innerHTML = 'Task Name: ';
  const taskInput = document.createElement('input');
  taskInput.className += 'task-input';
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('name', 'task-name');
  taskInput.setAttribute('required', '');
  // label plus input field for DUE-DATE:
  const dateInputLabel = document.createElement('label');
  dateInputLabel.setAttribute('for', 'task-date');
  dateInputLabel.innerHTML = 'Due Date: ';
  const dateInput = document.createElement('input');
  dateInput.className += 'task-input';
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'task-date');
  dateInput.setAttribute('required', '');
  // create the SELECT menu
  const selectLabel = document.createElement('label');
  selectLabel.setAttribute('for', 'priority');
  selectLabel.innerHTML = 'Priority: ';
  const select = document.createElement('select');
  select.className += 'task-input-dd';
  select.setAttribute('name', 'priority');

  // create OPTIONS for the select menu
  const optionOne = document.createElement('option');
  optionOne.setAttribute('value', 'high');
  optionOne.text = 'high';
  const optionTwo = document.createElement('option');
  optionTwo.setAttribute('value', 'medium');
  optionTwo.text = 'medium';
  const optionThree = document.createElement('option');
  optionThree.setAttribute('value', 'low');
  optionThree.text = 'low';

  // add OPTIONS to the SELECT menu
  select.add(optionOne);
  select.add(optionTwo);
  select.add(optionThree);

  // add the SUBMIT button
  const submitBtn = document.createElement('input');
  submitBtn.className += 'add-task';
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', '+ Add Task');

  // FINALLY, APPEND the elements Together to the form
  createForm.appendChild(h3);
  createForm.appendChild(taskInputLabel);
  createForm.appendChild(taskInput);
  createForm.appendChild(dateInputLabel);
  createForm.appendChild(dateInput);
  createForm.appendChild(selectLabel);
  createForm.appendChild(select);
  createForm.appendChild(submitBtn);
  attatchTo.appendChild(createForm);
}

function createProject(name, description, prIndex) {
  const addProject = document.querySelector('.projects');
  const newProject = document.createElement('div');
  newProject.className += 'to-do';
  newProject.setAttribute('data-index', `${prIndex}`);
  const h2 = document.createElement('h2');
  h2.className += 'to-do-title';
  const p = document.createElement('p');
  p.className += 'to-do-description';
  h2.innerHTML = `${name}`;
  p.innerHTML = `${description}`;
  const newTask = document.createElement('button');
  newTask.className += 'add-tsk';
  newTask.innerHTML = '+ New Task';
  const deleteProject = document.createElement('button');
  deleteProject.className += 'dlt-prjct';
  deleteProject.innerHTML = 'Delete Project';
  addProject.appendChild(newProject);
  newProject.appendChild(h2);
  newProject.appendChild(p);
  newProject.appendChild(newTask);
  createNewProjectForm(newProject);
  newProject.appendChild(deleteProject);
}

// add all local storage projects to the DOM
const allProjects = Storage.getProjects();
if (allProjects === undefined) {
  Storage.createArray();
} else {
  allProjects.forEach((project, index) => {
    createProject(project.name, project.description, index);
    project.tasks.forEach((task, chIndex) => {
      createTask(task.taskName, task.dueDate, task.priority, index, chIndex, task.completed);
    });
  });
}


const projectForm = document.querySelector('.add-project');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectForm.querySelector('input[name="project-name"]').value;
  const projectDesc = projectForm.querySelector('input[name="project-desc"]').value;
  const projectNew = new Project(projectName, projectDesc);
  Storage.addProject(projectNew);
  const len = Storage.getProjects().length;
  const indices = len === 0 ? len : len - 1;
  createProject(projectNew.name, projectNew.description, indices);
  projectForm.reset();
  if (projectForm.style.display === 'block') {
    projectForm.style.display = 'none';
  } else {
    projectForm.style.display = 'block';
  }
});

function createTask(tsName, tsDate, tsPriority, parentElement, tsIndex, tsStatus) {
  const addTask = document.querySelector(`div[data-index="${parentElement}"]`);
  const newTask = document.createElement('div');
  newTask.className += 'task-list';
  newTask.setAttribute('data-task', `${tsIndex}`);
  const span = document.createElement('span');
  span.className += 'task-text';
  const p1 = document.createElement('p');
  p1.className += 'task-desc';
  p1.innerHTML = `${tsName}`;
  const p2 = document.createElement('p');
  p2.className += 'due-date';
  p2.innerHTML = `${tsDate}`;
  const div1 = document.createElement('div');
  div1.className += 'check-form';
  const divTask1 = document.createElement('div');
  divTask1.className += 'task-footer-left';
  const check1 = document.createElement('i');
  check1.className += 'far fa-check-circle';
  const checkbox1 = document.createElement('input');
  checkbox1.className += 'done-task';
  checkbox1.setAttribute('type', 'checkbox');
  // if statement
  if (tsStatus === true) {
    checkbox1.checked = true;
    newTask.style.backgroundColor = '#819FD9';
  } else if (tsStatus === false) {
    checkbox1.checked = false;
    newTask.style.backgroundColor = '#D0B8B3';
  }

  const divTask2 = document.createElement('div');
  divTask2.className += 'task-footer-right';
  if (tsPriority === 'high') {
    divTask2.style.backgroundColor = '#E74B58';
  } else if (tsPriority === 'medium') {
    divTask2.style.backgroundColor = '#F09D51';
  } else if (tsPriority === 'low') {
    divTask2.style.backgroundColor = '#D0B8B3';
  }

  const check2 = document.createElement('i');
  check2.className += 'far fa-flag';
  const spanFooter = document.createElement('span');
  spanFooter.className += 'task-priority';
  spanFooter.innerHTML = `${tsPriority}`;
  const deleteButton = document.createElement('button');
  deleteButton.className += 'delete-task';
  const trashBin = document.createElement('i');
  trashBin.className += 'fas fa-trash-alt';

  addTask.appendChild(newTask);
  newTask.appendChild(span);
  span.appendChild(p1);
  span.appendChild(p2);
  span.appendChild(div1);
  div1.appendChild(divTask1);
  divTask1.appendChild(check1);
  divTask1.appendChild(checkbox1);
  div1.appendChild(divTask2);
  divTask2.appendChild(check2);
  divTask2.appendChild(spanFooter);
  newTask.appendChild(deleteButton);
  deleteButton.appendChild(trashBin);
}

const taskForm = document.querySelector('.projects');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const task = form.querySelector('input[name="task-name"]').value;
  const taskDate = form.querySelector('input[name="task-date"]').value;
  const taskPriority = form.querySelector('select[name="priority"]').value;
  const cTask = new TaskDetails(task, taskDate, taskPriority, false);
  const parent = form.parentElement;
  const parIndex = parent.getAttribute('data-index');
  Storage.addTask(cTask, parIndex);
  const allProjects = Storage.getProjects();
  const taskParent = allProjects[parIndex];
  const taskArr = taskParent.tasks.length - 1;
  createTask(cTask.taskName, cTask.dueDate, cTask.priority, parIndex, taskArr, cTask.completed);
  e.target.reset();
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'delete-task') {
    const parTask = e.target.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deleteTask(parTaskIndex, grandParIndex);
  } else if (e.target.className === 'fas fa-trash-alt') {
    const parTask = e.target.parentElement.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deleteTask(parTaskIndex, grandParIndex);
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'dlt-prjct') {
    const parProject = e.target.parentElement;
    const parProjectIndex = parProject.getAttribute('data-index');
    Storage.deleteProject(parProjectIndex);
    taskForm.removeChild(parProject);
  }
});

taskForm.addEventListener('change', (e) => {
  const checkRoot = e.target.parentElement.parentElement.parentElement.parentElement;
  const checkProject = checkRoot.parentElement;
  const checkRootIndex = checkRoot.getAttribute('data-task');
  const checkProjectIndex = checkProject.getAttribute('data-index');
  if (e.target.className === 'done-task') {
    Storage.updateTask(checkRootIndex, checkProjectIndex, e.target.checked);
    if (e.target.checked === true) {
      checkRoot.style.backgroundColor = '#819FD9';
    } else if (e.target.checked === false) {
      checkRoot.style.backgroundColor = '#D0B8B3';
    }
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'task-footer-right') {
    const priorityRootElement = e.target.parentElement.parentElement.parentElement;
    const priorityElem = e.target;
    updatePriority(priorityRootElement, priorityElem);
  } else if (e.target.className === 'far fa-flag'
            || e.target.className === 'task-priority') {
    const priorityRootElement = e.target.parentElement.parentElement.parentElement.parentElement;
    const priorityElem = e.target.parentElement;
    updatePriority(priorityRootElement, priorityElem);
  }
});

function updatePriority(pRoot, element) {
  const priorityRoot = pRoot;
  const priorityProj = priorityRoot.parentElement;
  const priorityRootIndex = priorityRoot.getAttribute('data-task');
  const priorityProjIndex = priorityProj.getAttribute('data-index');
  const allProjects = Storage.getProjects();
  let thePriority = allProjects[priorityProjIndex].tasks[priorityRootIndex].priority;
  if (thePriority === 'high') {
    thePriority = 'low';
    element.children[1].innerHTML = 'low';
    element.style.backgroundColor = '#D0B8B3';
  } else if (thePriority === 'low') {
    thePriority = 'medium';
    element.children[1].innerHTML = 'medium';
    element.style.backgroundColor = '#F09D51';
  } else if (thePriority === 'medium') {
    thePriority = 'high';
    element.children[1].innerHTML = 'high';
    element.style.backgroundColor = '#E74B58';
  }
  Storage.updateTsPriority(priorityRootIndex, priorityProjIndex, thePriority);
}

const addProject = document.querySelector('.add-item');
addProject.addEventListener('click', () => {
  const form = document.querySelector('.add-project');
  if (getComputedStyle(form, null).display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'add-tsk') {
    if (getComputedStyle(e.target.parentElement.children[3], null).display === 'none') {
      e.target.parentElement.children[3].style.display = 'block';
    } else {
      e.target.parentElement.children[3].style.display = 'none';
    }
  }
});
