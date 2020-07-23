export function addProject(project) {
    let myProjects;
    if(localStorage.getItem('myProjects') === null){
        myProjects = [];
    } else {
        myProjects = JSON.parse(localStorage.getItem('myProjects'));
    }
    myProjects.push(project);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    console.log('Project added Successfully', project)
}


export function getProjects(){
    let myProjects = JSON.parse(localStorage.getItem('myProjects'))
    return myProjects;
}

export function updateProject(){
    if (localStorage.getItem('myProjects')){

    }
}

export function addTask(task, project){
    let projects = JSON.parse(localStorage.getItem('myProjects'));
    let index = project.getAttribute('data-index');
    projects[index].tasks.push(task);
    localStorage.setItem('myProjects', JSON.stringify(projects));
    console.log('task added successfully', task);
}

export function deleteProject(key){
    return localStorage.removeItem(`${key}`)
}

export function removeTask(key){
    localStorage.removeItem(`${key}`)
}