export default function createTask(
  tsName,
  tsDate,
  tsPriority,
  parentElement,
  tsIndex,
  tsStatus,
  tsDiff,
) {
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
  const p3 = document.createElement('p');
  p3.className += 'due-date';
  p3.innerHTML = `Days left: ${tsDiff}`;
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
  span.appendChild(p3);
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
