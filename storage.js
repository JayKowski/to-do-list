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

export function updateProject(){
    if (localStorage.getItem('myProjects')){

    }
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

export function deleteProject(key){
    return localStorage.removeItem(`${key}`)
}

export function removeTask(key){
    localStorage.removeItem(`${key}`)
}

export function clearStorage(){
    localStorage.clear();
}