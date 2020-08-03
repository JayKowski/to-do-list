import * as Storage from './storage';

export default function updatePriority(pRoot, element) {
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
