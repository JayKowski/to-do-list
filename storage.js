let projects;

export function createArray() {
  projects = [];
}

export function addProject(project) {
  if (localStorage.getItem('myProjects') === null) {
    createArray();
  } else {
    projects = JSON.parse(localStorage.getItem('myProjects'));
  }
  projects.push(project);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}


export function getProjects() {
  if (JSON.parse(localStorage.getItem('myProjects')) === null) {
    createArray();
    return projects;
  }
  projects = JSON.parse(localStorage.getItem('myProjects'));

  return projects;
}

export function deleteProject(project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects.splice(project, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function addTask(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = parseInt(project, 10);
  // console.log(index)
  projects[index].tasks.push(task);
  // console.log(projects[index]);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function deleteTask(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[parseInt(project, 10)].tasks.splice(task, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function updateTask(task, aProject, status) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const tsProject = projects[parseInt(aProject, 10)];
  const tsTask = tsProject.tasks[task];
  tsTask.completed = status;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function updateTsPriority(task, aProject, tsPriority) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const tsProject = projects[parseInt(aProject, 10)];
  const tsTask = tsProject.tasks[task];
  tsTask.priority = tsPriority;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function clearStorage() {
  localStorage.clear();
}