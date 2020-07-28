import createNewProjectForm from './projectForm';

export default function createProject(name, description, prIndex) {
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
