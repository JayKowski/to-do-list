/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./createProject.js":
/*!**************************!*\
  !*** ./createProject.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createProject; });\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ \"./projectForm.js\");\n\n\nfunction createProject(name, description, prIndex) {\n  const addProject = document.querySelector(\".projects\");\n  const newProject = document.createElement(\"div\");\n  newProject.className += \"to-do\";\n  newProject.setAttribute(\"data-index\", `${prIndex}`);\n  const h2 = document.createElement(\"h2\");\n  h2.className += \"to-do-title\";\n  const p = document.createElement(\"p\");\n  p.className += \"to-do-description\";\n  h2.innerHTML = `${name}`;\n  p.innerHTML = `${description}`;\n  const newTask = document.createElement(\"button\");\n  newTask.className += \"add-tsk\";\n  newTask.innerHTML = \"+ New Task\";\n  const deleteProject = document.createElement(\"button\");\n  deleteProject.className += \"dlt-prjct\";\n  deleteProject.innerHTML = \"Delete Project\";\n  addProject.appendChild(newProject);\n  newProject.appendChild(h2);\n  newProject.appendChild(p);\n  newProject.appendChild(newTask);\n  Object(_projectForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newProject);\n  newProject.appendChild(deleteProject);\n}\n\n\n//# sourceURL=webpack:///./createProject.js?");

/***/ }),

/***/ "./createTask.js":
/*!***********************!*\
  !*** ./createTask.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createTask; });\nfunction createTask(\n  tsName,\n  tsDate,\n  tsPriority,\n  parentElement,\n  tsIndex,\n  tsStatus,\n) {\n  const addTask = document.querySelector(`div[data-index=\"${parentElement}\"]`);\n  const newTask = document.createElement(\"div\");\n  newTask.className += \"task-list\";\n  newTask.setAttribute(\"data-task\", `${tsIndex}`);\n  const span = document.createElement(\"span\");\n  span.className += \"task-text\";\n  const p1 = document.createElement(\"p\");\n  p1.className += \"task-desc\";\n  p1.innerHTML = `${tsName}`;\n  const p2 = document.createElement(\"p\");\n  p2.className += \"due-date\";\n  p2.innerHTML = `${tsDate}`;\n  const div1 = document.createElement(\"div\");\n  div1.className += \"check-form\";\n  const divTask1 = document.createElement(\"div\");\n  divTask1.className += \"task-footer-left\";\n  const check1 = document.createElement(\"i\");\n  check1.className += \"far fa-check-circle\";\n  const checkbox1 = document.createElement(\"input\");\n  checkbox1.className += \"done-task\";\n  checkbox1.setAttribute(\"type\", \"checkbox\");\n  // if statement\n  if (tsStatus === true) {\n    checkbox1.checked = true;\n    newTask.style.backgroundColor = \"#819FD9\";\n  } else if (tsStatus === false) {\n    checkbox1.checked = false;\n    newTask.style.backgroundColor = \"#D0B8B3\";\n  }\n\n  const divTask2 = document.createElement(\"div\");\n  divTask2.className += \"task-footer-right\";\n  if (tsPriority === \"high\") {\n    divTask2.style.backgroundColor = \"#E74B58\";\n  } else if (tsPriority === \"medium\") {\n    divTask2.style.backgroundColor = \"#F09D51\";\n  } else if (tsPriority === \"low\") {\n    divTask2.style.backgroundColor = \"#D0B8B3\";\n  }\n\n  const check2 = document.createElement(\"i\");\n  check2.className += \"far fa-flag\";\n  const spanFooter = document.createElement(\"span\");\n  spanFooter.className += \"task-priority\";\n  spanFooter.innerHTML = `${tsPriority}`;\n  const deleteButton = document.createElement(\"button\");\n  deleteButton.className += \"delete-task\";\n  const trashBin = document.createElement(\"i\");\n  trashBin.className += \"fas fa-trash-alt\";\n\n  addTask.appendChild(newTask);\n  newTask.appendChild(span);\n  span.appendChild(p1);\n  span.appendChild(p2);\n  span.appendChild(div1);\n  div1.appendChild(divTask1);\n  divTask1.appendChild(check1);\n  divTask1.appendChild(checkbox1);\n  div1.appendChild(divTask2);\n  divTask2.appendChild(check2);\n  divTask2.appendChild(spanFooter);\n  newTask.appendChild(deleteButton);\n  deleteButton.appendChild(trashBin);\n}\n\n\n//# sourceURL=webpack:///./createTask.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./storage.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./createTask.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./createProject.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./project.js\");\n/* harmony import */ var _taskDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDetails */ \"./taskDetails.js\");\n/* harmony import */ var _updatePriority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePriority */ \"./updatePriority.js\");\n\n\n\n\n\n\n\n// add all local storage projects to the DOM\nconst allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]();\nif (allProjects === undefined) {\n  _storage__WEBPACK_IMPORTED_MODULE_0__[\"createArray\"]();\n} else {\n  allProjects.forEach((project, index) => {\n    Object(_createProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project.name, project.description, index);\n    project.tasks.forEach((task, chIndex) => {\n      Object(_createTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task.taskName, task.dueDate, task.priority, index, chIndex, task.completed);\n    });\n  });\n}\n\nconst projectForm = document.querySelector('.add-project');\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const projectName = projectForm.querySelector('input[name=\"project-name\"]').value;\n  const projectDesc = projectForm.querySelector('input[name=\"project-desc\"]').value;\n  const projectNew = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projectName, projectDesc);\n  _storage__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"](projectNew);\n  const len = _storage__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]().length;\n  const indices = len === 0 ? len : len - 1;\n  Object(_createProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectNew.name, projectNew.description, indices);\n  projectForm.reset();\n  if (projectForm.style.display === 'block') {\n    projectForm.style.display = 'none';\n  } else {\n    projectForm.style.display = 'block';\n  }\n});\n\nconst taskForm = document.querySelector('.projects');\ntaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const form = e.target;\n  const task = form.querySelector('input[name=\"task-name\"]').value;\n  const taskDate = form.querySelector('input[name=\"task-date\"]').value;\n  const taskPriority = form.querySelector('select[name=\"priority\"]').value;\n  const cTask = new _taskDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"](task, taskDate, taskPriority, false);\n  const parent = form.parentElement;\n  const parIndex = parent.getAttribute('data-index');\n  _storage__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"](cTask, parIndex);\n  const allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]();\n  const taskParent = allProjects[parIndex];\n  const taskArr = taskParent.tasks.length - 1;\n  Object(_createTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cTask.taskName, cTask.dueDate, cTask.priority, parIndex, taskArr, cTask.completed);\n  e.target.reset();\n  if (form.style.display === 'block') {\n    form.style.display = 'none';\n  } else {\n    form.style.display = 'block';\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'delete-task') {\n    const parTask = e.target.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"deleteTask\"](parTaskIndex, grandParIndex);\n  } else if (e.target.className === 'fas fa-trash-alt') {\n    const parTask = e.target.parentElement.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"deleteTask\"](parTaskIndex, grandParIndex);\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'dlt-prjct') {\n    const parProject = e.target.parentElement;\n    const parProjectIndex = parProject.getAttribute('data-index');\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"deleteProject\"](parProjectIndex);\n    taskForm.removeChild(parProject);\n  }\n});\n\ntaskForm.addEventListener('change', (e) => {\n  const checkRoot = e.target.parentElement.parentElement.parentElement.parentElement;\n  const checkProject = checkRoot.parentElement;\n  const checkRootIndex = checkRoot.getAttribute('data-task');\n  const checkProjectIndex = checkProject.getAttribute('data-index');\n  if (e.target.className === 'done-task') {\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"updateTask\"](checkRootIndex, checkProjectIndex, e.target.checked);\n    if (e.target.checked === true) {\n      checkRoot.style.backgroundColor = '#819FD9';\n    } else if (e.target.checked === false) {\n      checkRoot.style.backgroundColor = '#D0B8B3';\n    }\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n\n  if (e.target.className === 'task-footer-right') {\n    const priorityRootElement = e.target.parentElement.parentElement.parentElement;\n    const priorityElem = e.target;\n    Object(_updatePriority__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(priorityRootElement, priorityElem);\n  } else if (e.target.className === 'far fa-flag'\n            || e.target.className === 'task-priority') {\n    const priorityRootElement = e.target.parentElement.parentElement.parentElement.parentElement;\n    const priorityElem = e.target.parentElement;\n    Object(_updatePriority__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(priorityRootElement, priorityElem);\n  }\n});\n\nconst addProject = document.querySelector('.add-item');\naddProject.addEventListener('click', () => {\n  const form = document.querySelector('.add-project');\n  if (getComputedStyle(form, null).display === 'none') {\n    form.style.display = 'block';\n  } else {\n    form.style.display = 'none';\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'add-tsk') {\n    if (getComputedStyle(e.target.parentElement.children[3], null).display === 'none') {\n      e.target.parentElement.children[3].style.display = 'block';\n    } else {\n      e.target.parentElement.children[3].style.display = 'none';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./project.js":
/*!********************!*\
  !*** ./project.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\nfunction Project(name, description) {\n  this.name = name;\n  this.description = description;\n  this.tasks = [];\n}\n\n\n//# sourceURL=webpack:///./project.js?");

/***/ }),

/***/ "./projectForm.js":
/*!************************!*\
  !*** ./projectForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createNewProjectForm; });\nfunction createNewProjectForm(attatchTo) {\n  const createForm = document.createElement(\"form\");\n  createForm.className += \"new-task\";\n  const h3 = document.createElement(\"h3\");\n  h3.innerText = \"New Task\";\n  // label plus input field for TASK-NAME:\n  const taskInputLabel = document.createElement(\"label\");\n  taskInputLabel.setAttribute(\"for\", \"task-name\");\n  taskInputLabel.innerHTML = \"Task Name: \";\n  const taskInput = document.createElement(\"input\");\n  taskInput.className += \"task-input\";\n  taskInput.setAttribute(\"type\", \"text\");\n  taskInput.setAttribute(\"name\", \"task-name\");\n  taskInput.setAttribute(\"required\", \"\");\n  // label plus input field for DUE-DATE:\n  const dateInputLabel = document.createElement(\"label\");\n  dateInputLabel.setAttribute(\"for\", \"task-date\");\n  dateInputLabel.innerHTML = \"Due Date: \";\n  const dateInput = document.createElement(\"input\");\n  dateInput.className += \"task-input\";\n  dateInput.setAttribute(\"type\", \"date\");\n  dateInput.setAttribute(\"name\", \"task-date\");\n  dateInput.setAttribute(\"required\", \"\");\n  // create the SELECT menu\n  const selectLabel = document.createElement(\"label\");\n  selectLabel.setAttribute(\"for\", \"priority\");\n  selectLabel.innerHTML = \"Priority: \";\n  const select = document.createElement(\"select\");\n  select.className += \"task-input-dd\";\n  select.setAttribute(\"name\", \"priority\");\n\n  // create OPTIONS for the select menu\n  const optionOne = document.createElement(\"option\");\n  optionOne.setAttribute(\"value\", \"high\");\n  optionOne.text = \"high\";\n  const optionTwo = document.createElement(\"option\");\n  optionTwo.setAttribute(\"value\", \"medium\");\n  optionTwo.text = \"medium\";\n  const optionThree = document.createElement(\"option\");\n  optionThree.setAttribute(\"value\", \"low\");\n  optionThree.text = \"low\";\n\n  // add OPTIONS to the SELECT menu\n  select.add(optionOne);\n  select.add(optionTwo);\n  select.add(optionThree);\n\n  // add the SUBMIT button\n  const submitBtn = document.createElement(\"input\");\n  submitBtn.className += \"add-task\";\n  submitBtn.setAttribute(\"type\", \"submit\");\n  submitBtn.setAttribute(\"value\", \"+ Add Task\");\n\n  // FINALLY, APPEND the elements Together to the form\n  createForm.appendChild(h3);\n  createForm.appendChild(taskInputLabel);\n  createForm.appendChild(taskInput);\n  createForm.appendChild(dateInputLabel);\n  createForm.appendChild(dateInput);\n  createForm.appendChild(selectLabel);\n  createForm.appendChild(select);\n  createForm.appendChild(submitBtn);\n  attatchTo.appendChild(createForm);\n}\n\n\n//# sourceURL=webpack:///./projectForm.js?");

/***/ }),

/***/ "./storage.js":
/*!********************!*\
  !*** ./storage.js ***!
  \********************/
/*! exports provided: createArray, addProject, getProjects, deleteProject, addTask, deleteTask, updateTask, updateTsPriority, clearStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArray\", function() { return createArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTsPriority\", function() { return updateTsPriority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStorage\", function() { return clearStorage; });\nlet projects;\n\nfunction createArray() {\n  projects = [];\n}\n\nfunction addProject(project) {\n  if (localStorage.getItem('myProjects') === null) {\n    createArray();\n  } else {\n    projects = JSON.parse(localStorage.getItem('myProjects'));\n  }\n  projects.push(project);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\n\nfunction getProjects() {\n  if (JSON.parse(localStorage.getItem('myProjects')) === null) {\n    createArray();\n    return projects;\n  }\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n\n  return projects;\n}\n\nfunction deleteProject(project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects.splice(project, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction addTask(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const index = parseInt(project, 10);\n  // console.log(index)\n  projects[index].tasks.push(task);\n  // console.log(projects[index]);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction deleteTask(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[parseInt(project, 10)].tasks.splice(task, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updateTask(task, aProject, status) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const tsProject = projects[parseInt(aProject, 10)];\n  const tsTask = tsProject.tasks[task];\n  tsTask.completed = status;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updateTsPriority(task, aProject, tsPriority) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const tsProject = projects[parseInt(aProject, 10)];\n  const tsTask = tsProject.tasks[task];\n  tsTask.priority = tsPriority;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction clearStorage() {\n  localStorage.clear();\n}\n\n//# sourceURL=webpack:///./storage.js?");

/***/ }),

/***/ "./taskDetails.js":
/*!************************!*\
  !*** ./taskDetails.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaskDetails; });\nfunction TaskDetails(name, date, priority, completed) {\n  this.taskName = name;\n  this.dueDate = date;\n  this.priority = priority;\n  this.completed = completed;\n}\n\n\n//# sourceURL=webpack:///./taskDetails.js?");

/***/ }),

/***/ "./updatePriority.js":
/*!***************************!*\
  !*** ./updatePriority.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updatePriority; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./storage.js\");\n\n\nfunction updatePriority(pRoot, element) {\n  const priorityRoot = pRoot;\n  const priorityProj = priorityRoot.parentElement;\n  const priorityRootIndex = priorityRoot.getAttribute(\"data-task\");\n  const priorityProjIndex = priorityProj.getAttribute(\"data-index\");\n  const allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]();\n  let thePriority = allProjects[priorityProjIndex].tasks[priorityRootIndex].priority;\n  if (thePriority === \"high\") {\n    thePriority = \"low\";\n    element.children[1].innerHTML = \"low\";\n    element.style.backgroundColor = \"#D0B8B3\";\n  } else if (thePriority === \"low\") {\n    thePriority = \"medium\";\n    element.children[1].innerHTML = \"medium\";\n    element.style.backgroundColor = \"#F09D51\";\n  } else if (thePriority === \"medium\") {\n    thePriority = \"high\";\n    element.children[1].innerHTML = \"high\";\n    element.style.backgroundColor = \"#E74B58\";\n  }\n  _storage__WEBPACK_IMPORTED_MODULE_0__[\"updateTsPriority\"](priorityRootIndex, priorityProjIndex, thePriority);\n}\n\n\n//# sourceURL=webpack:///./updatePriority.js?");

/***/ })

/******/ });