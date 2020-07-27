let projects;

export function createArray(){
    projects = [];
}

export function addProject(project) {
    if(localStorage.getItem('myProjects') === null){
        createArray();
    } else {
        projects = JSON.parse(localStorage.getItem('myProjects'));
    }
    console.log(projects);
    projects.push(project);
    localStorage.setItem('myProjects', JSON.stringify(projects));
    console.log('Project added Successfully', project)
}


export function getProjects(){
    if(JSON.parse(localStorage.getItem('myProjects')) === null){
        createArray();
        console.log("Local storage empty");
        return projects;
    } else {
        projects = JSON.parse(localStorage.getItem('myProjects'));
    }
    return projects;
}

export function deleteProject(project){
    projects = JSON.parse(localStorage.getItem('myProjects'));
    projects.splice(project, 1);
    console.log('Your project has been deleted');
    localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function addTask(task, project){
    projects = JSON.parse(localStorage.getItem('myProjects'));
    let index = parseInt(project);
    // console.log(index)
    projects[index].tasks.push(task);
    // console.log(projects[index]);
    localStorage.setItem('myProjects', JSON.stringify(projects))
    console.log('task added successfully', task);
}

export function deleteTask(task, project){
    projects = JSON.parse(localStorage.getItem('myProjects'));
    projects[parseInt(project)].tasks.splice(task, 1);
    console.log('Your task has been deleted');
    localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function updateTask(task, aProject, status, tsPriority){
    projects = JSON.parse(localStorage.getItem('myProjects'));
    let tsProject = projects[parseInt(aProject)];
    let tsTask = tsProject.tasks[task];
    tsTask.completed = status;
    tsTask.priority = tsPriority;
    localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function clearStorage(){
    localStorage.clear();
}