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

const myProjects = [];

//Should be in it's own module file
function createNewProjectForm(attatchTo){
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

const projectForm = document.querySelector('.add-project')
projectForm.addEventListener('submit', function(e){
    e.preventDefault();
    const projectName = projectForm.querySelector('input[name="project-name"]').value;
    const projectDesc = projectForm.querySelector('input[name="project-desc"]').value;

    const addProject = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className += 'to-do';
    let h2 = document.createElement('h2');
    h2.className += 'to-do-title';
    let p = document.createElement('p');
    p.className += 'to-do-description';
    h2.innerHTML = `${projectName}`;
    p.innerHTML = `${projectDesc}`;

    addProject.appendChild(newProject);
    newProject.appendChild(h2);
    newProject.appendChild(p);
    createNewProjectForm(newProject)
});
