import * as Storage from './storage.js';

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

///////////// const myProjects = []; /////////////////

//Should be in it's own module file
function taskDetails(name, date, priority) {
    this.taskName = name,
    this.dueDate = date,
    this.priority = priority
}

function project(name, description) {
    this.name = name,
    this.description = description,
    this.tasks = []
}

const task1 = new taskDetails('add task', '12/13/14', 'HIGH')

// console.log(task1.taskName)

function createNewProjectForm(attatchTo) {
    const createForm = document.createElement('form')
    createForm.className += 'new-task';
    const h3 = document.createElement('h3')
    h3.innerText = 'New Task'

    // label plus input field for TASK-NAME: 
    const taskInputLabel = document.createElement('label');
    taskInputLabel.setAttribute('for', 'task-name');
    taskInputLabel.innerHTML = 'Task Name: ';

    const taskInput = document.createElement('input');
    taskInput.className += 'task-input';
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('name', 'task-name');

    // label plus input field for DUE-DATE:
    const dateInputLabel = document.createElement('label');
    dateInputLabel.setAttribute('for', 'task-date');
    dateInputLabel.innerHTML = 'Due Date: ';

    const dateInput = document.createElement('input');
    dateInput.className += 'task-input';
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'task-date');

    //create the SELECT menu
    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'priority');
    selectLabel.innerHTML = 'Priority: ';

    const select = document.createElement('select');
    select.className += 'task-input-dd';
    select.setAttribute('name', 'priority');

    //create OPTIONS for the select menu
    const optionOne = document.createElement("option");
    optionOne.setAttribute('value', 'high')
    optionOne.text = "high";
    const optionTwo = document.createElement("option");
    optionTwo.setAttribute('value', 'medium')
    optionTwo.text = "medium";
    const optionThree = document.createElement("option");
    optionThree.setAttribute('value', 'low')
    optionThree.text = "low";

    //add OPTIONS to the SELECT menu
    select.add(optionOne)
    select.add(optionTwo)
    select.add(optionThree)

    //add the SUBMIT button
    const submitBtn = document.createElement('input');
    submitBtn.className += 'add-task';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', '+ Add Task');

    //FINALLY, APPEND the elements Together to the form
    createForm.appendChild(h3)
    createForm.appendChild(taskInputLabel);
    createForm.appendChild(taskInput);
    createForm.appendChild(dateInputLabel);
    createForm.appendChild(dateInput);
    createForm.appendChild(selectLabel);
    createForm.appendChild(select);
    createForm.appendChild(submitBtn);
    attatchTo.appendChild(createForm);
}

function createProject(name, description, prIndex){
    const addProject = document.querySelector('.projects');
    const newProject = document.createElement('div');
    // console.log(prIndex)
    newProject.className += 'to-do';
    newProject.setAttribute('data-index', `${prIndex}`);
    const h2 = document.createElement('h2');
    h2.className += 'to-do-title';
    const p = document.createElement('p');
    p.className += 'to-do-description';
    h2.innerHTML = `${name}`;
    p.innerHTML = `${description}`;
    const deleteProject = document.createElement('button');
    deleteProject.className += 'dlt-prjct';
    deleteProject.innerHTML = 'Delete Project';
    addProject.appendChild(newProject);
    newProject.appendChild(h2);
    newProject.appendChild(p);
    createNewProjectForm(newProject);
    newProject.appendChild(deleteProject);
}

// add all local storage projects to the DOM
let allProjects = Storage.getProjects();
allProjects.forEach(function (project, index) {
    createProject(project.name, project.description, index);
    createTask(project.tasks.taskName, project.tasks.dueDate, project.tasks.priority, index)
})

const projectForm = document.querySelector('.add-project')
    projectForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Storage.clearStorage();
    const projectName = projectForm.querySelector('input[name="project-name"]').value;
    const projectDesc = projectForm.querySelector('input[name="project-desc"]').value;
    //Create Project Object
    let projectNew = new project(projectName, projectDesc);

    Storage.addProject(projectNew);

    // myProjects.push(projectNew);
    createProject(projectNew.name, projectNew.description)
});

function createTask(tsName, tsDate, tsPriority, parentElement) {
    const addTask = document.querySelector(`div[data-index="${parentElement}"]`);
    console.log(parentElement, ' -- ', addTask)
    const newTask = document.createElement('div');
    newTask.className += 'task-list'
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
    divTask1.className += 'task-footer';
    const check1 = document.createElement('i');
    check1.className += 'far fa-check-circle';
    const checkbox1 = document.createElement('input');
    checkbox1.className += 'done-task'
    checkbox1.setAttribute('type', 'checkbox');
    const divTask2 = document.createElement('div');
    divTask2.className += 'task-footer';
    const check2 = document.createElement('i');
    check2.className += 'far fa-flag';
    const spanFooter = document.createElement('span');
    spanFooter.className += 'task-priority';
    spanFooter.innerHTML = `${tsPriority}`;
    const deleteButton = document.createElement('button');
    deleteButton.className += 'delete-task';
    const trashBin = document.createElement('i');
    trashBin.className += 'fas fa-trash-alt';

    // addTask.appendChild(returnForm());
    // returnForm().appendChild(span);
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

const taskForm = document.querySelectorAll('.new-task')
// console.log(taskForm)
taskForm.forEach(function(form){
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = form.querySelector('input[name="task-name"]').value
        const taskDate = form.querySelector('input[name="task-date"]').value
        const taskPriority = form.querySelector('select[name="priority"]').value
        const cTask = new taskDetails(task, taskDate, taskPriority);
        const parent = form.parentElement;
        const parIndex = parent.getAttribute('data-index');
        // console.log(parIndex)
        // console.log(parIndex, e.target)
        Storage.addTask(cTask, parent);
        let allProjects = Storage.getProjects();
        createTask(cTask.taskName, cTask.dueDate, cTask.Priority, parIndex);
    })
})

