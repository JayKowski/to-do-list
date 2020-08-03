import './styles.css';
import format from 'date-fns/format';
import differrenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import * as Storage from './components/storage';
import createTask from './components/createTask';
import createProject from './components/createProject';
import Project from './components/project';
import TaskDetails from './components/taskDetails';
import updatePriority from './components/updatePriority';

// add all local storage projects to the DOM
const allProjects = Storage.getProjects();
const todayDate = new Date().getDate();
const todayYear = new Date().getFullYear();
const todayMonth = new Date().getMonth() + 1;

if (allProjects === undefined) {
  Storage.createArray();
} else {
  allProjects.forEach((project, index) => {
    createProject(project.name, project.description, index);
    project.tasks.forEach((task, chIndex) => {
      createTask(task.taskName,
        task.dueDate,
        task.priority,
        index,
        chIndex,
        task.completed,
        task.leftDays);
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

const taskForm = document.querySelector('.projects');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const task = form.querySelector('input[name="task-name"]').value;
  const taskDate = form.querySelector('input[name="task-date"]').value;
  const taskPriority = form.querySelector('select[name="priority"]').value;
  const splitted = taskDate.split('-');
  const year = splitted[0];
  const month = splitted[1];
  const day = splitted[2];
  const trueDate = format(new Date(taskDate), 'MMMM dd, yyyy');
  const diff = differrenceInCalendarDays(
    new Date(year, month, day),
    new Date(todayYear, todayMonth, todayDate),
  );
  if (diff < 0) {
    /* eslint-disable no-alert, no-console */

    alert('due date cannot be prior to today');
    return false;
  }
  const cTask = new TaskDetails(task, trueDate, taskPriority, false, diff);
  const parent = form.parentElement;
  const parIndex = parent.getAttribute('data-index');
  Storage.addTask(cTask, parIndex);
  const allProjects = Storage.getProjects();
  const taskParent = allProjects[parIndex];
  const taskArr = taskParent.tasks.length - 1;
  createTask(cTask.taskName,
    cTask.dueDate,
    cTask.priority,
    parIndex,
    taskArr,
    cTask.completed,
    diff);

  e.target.reset();
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
  return true;
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
