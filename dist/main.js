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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./storage.js\");\n\r\n\r\n// ## PHASE 1\r\n// Add event listener for new project and publish the results to the DOM -- //\r\n\r\n// Add event listener for new task input form for adding newly created tasks to the DOM\r\n\r\n// ## PHASE 2\r\n// Change background of task upon being chekced as complete\r\n// deleting a task from the DOM\r\n// deleting project from DOM\r\n\r\n// ## PHASE 3\r\n// reveal/hide new project form\r\n// expand/contract project view (hiding the form and the tasks)\r\n\r\n///////////// const myProjects = []; /////////////////\r\n\r\n//Should be in it's own module file\r\nfunction taskDetails(name, date, priority) {\r\n    this.taskName = name,\r\n    this.dueDate = date,\r\n    this.priority = priority\r\n}\r\n\r\nfunction project(name, description) {\r\n    this.name = name,\r\n    this.description = description,\r\n    this.tasks = []\r\n}\r\n\r\nconst task1 = new taskDetails('add task', '12/13/14', 'HIGH')\r\n\r\n// console.log(task1.taskName)\r\n// Storage.clearStorage();\r\nfunction createNewProjectForm(attatchTo) {\r\n    const createForm = document.createElement('form')\r\n    createForm.className += 'new-task';\r\n    const h3 = document.createElement('h3')\r\n    h3.innerText = 'New Task'\r\n\r\n    // label plus input field for TASK-NAME: \r\n    const taskInputLabel = document.createElement('label');\r\n    taskInputLabel.setAttribute('for', 'task-name');\r\n    taskInputLabel.innerHTML = 'Task Name: ';\r\n\r\n    const taskInput = document.createElement('input');\r\n    taskInput.className += 'task-input';\r\n    taskInput.setAttribute('type', 'text');\r\n    taskInput.setAttribute('name', 'task-name');\r\n    taskInput.setAttribute('required', '');\r\n\r\n    // label plus input field for DUE-DATE:\r\n    const dateInputLabel = document.createElement('label');\r\n    dateInputLabel.setAttribute('for', 'task-date');\r\n    dateInputLabel.innerHTML = 'Due Date: ';\r\n\r\n    const dateInput = document.createElement('input');\r\n    dateInput.className += 'task-input';\r\n    dateInput.setAttribute('type', 'date');\r\n    dateInput.setAttribute('name', 'task-date');\r\n    dateInput.setAttribute('required', '');\r\n\r\n    //create the SELECT menu\r\n    const selectLabel = document.createElement('label');\r\n    selectLabel.setAttribute('for', 'priority');\r\n    selectLabel.innerHTML = 'Priority: ';\r\n\r\n    const select = document.createElement('select');\r\n    select.className += 'task-input-dd';\r\n    select.setAttribute('name', 'priority');\r\n\r\n    //create OPTIONS for the select menu\r\n    const optionOne = document.createElement(\"option\");\r\n    optionOne.setAttribute('value', 'high')\r\n    optionOne.text = \"high\";\r\n    const optionTwo = document.createElement(\"option\");\r\n    optionTwo.setAttribute('value', 'medium')\r\n    optionTwo.text = \"medium\";\r\n    const optionThree = document.createElement(\"option\");\r\n    optionThree.setAttribute('value', 'low')\r\n    optionThree.text = \"low\";\r\n\r\n    //add OPTIONS to the SELECT menu\r\n    select.add(optionOne)\r\n    select.add(optionTwo)\r\n    select.add(optionThree)\r\n\r\n    //add the SUBMIT button\r\n    const submitBtn = document.createElement('input');\r\n    submitBtn.className += 'add-task';\r\n    submitBtn.setAttribute('type', 'submit');\r\n    submitBtn.setAttribute('value', '+ Add Task');\r\n\r\n    //FINALLY, APPEND the elements Together to the form\r\n    createForm.appendChild(h3)\r\n    createForm.appendChild(taskInputLabel);\r\n    createForm.appendChild(taskInput);\r\n    createForm.appendChild(dateInputLabel);\r\n    createForm.appendChild(dateInput);\r\n    createForm.appendChild(selectLabel);\r\n    createForm.appendChild(select);\r\n    createForm.appendChild(submitBtn);\r\n    attatchTo.appendChild(createForm);\r\n}\r\n\r\nfunction createProject(name, description, prIndex){\r\n    const addProject = document.querySelector('.projects');\r\n    const newProject = document.createElement('div');\r\n    // console.log(prIndex)\r\n    newProject.className += 'to-do';\r\n    newProject.setAttribute('data-index', `${prIndex}`);\r\n    const h2 = document.createElement('h2');\r\n    h2.className += 'to-do-title';\r\n    const p = document.createElement('p');\r\n    p.className += 'to-do-description';\r\n    h2.innerHTML = `${name}`;\r\n    p.innerHTML = `${description}`;\r\n    const deleteProject = document.createElement('button');\r\n    deleteProject.className += 'dlt-prjct';\r\n    deleteProject.innerHTML = 'Delete Project';\r\n    addProject.appendChild(newProject);\r\n    newProject.appendChild(h2);\r\n    newProject.appendChild(p);\r\n    createNewProjectForm(newProject);\r\n    newProject.appendChild(deleteProject);\r\n}\r\n\r\n// add all local storage projects to the DOM\r\nlet allProjects = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]();\r\nif(allProjects === undefined){\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"createArray\"]()\r\n} else {\r\n    allProjects.forEach(function (project, index) {\r\n        createProject(project.name, project.description, index);\r\n        project.tasks.forEach(function (task) {\r\n            createTask(task.taskName, task.dueDate, task.priority, index);\r\n        })\r\n    })\r\n}\r\n    \r\n\r\n\r\n\r\n\r\nconst projectForm = document.querySelector('.add-project')\r\n    projectForm.addEventListener('submit', function (e) {\r\n    e.preventDefault();\r\n    // Storage.clearStorage();\r\n    const projectName = projectForm.querySelector('input[name=\"project-name\"]').value;\r\n    const projectDesc = projectForm.querySelector('input[name=\"project-desc\"]').value;\r\n    //Create Project Object\r\n    let projectNew = new project(projectName, projectDesc);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"](projectNew);\r\n    const len = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]().length\r\n    const indices = len === 0 ? len : len - 1;\r\n    // myProjects.push(projectNew);\r\n    createProject(projectNew.name, projectNew.description, indices)\r\n});\r\n\r\nfunction createTask(tsName, tsDate, tsPriority, parentElement) {\r\n    const addTask = document.querySelector(`div[data-index=\"${parentElement}\"]`);\r\n    // console.log(parentElement, ' -- ', addTask)\r\n    const newTask = document.createElement('div');\r\n    newTask.className += 'task-list'\r\n    const span = document.createElement('span');\r\n    span.className += 'task-text';\r\n    const p1 = document.createElement('p');\r\n    p1.className += 'task-desc';\r\n    p1.innerHTML = `${tsName}`;\r\n    const p2 = document.createElement('p');\r\n    p2.className += 'due-date';\r\n    p2.innerHTML = `${tsDate}`;\r\n    const div1 = document.createElement('div');\r\n    div1.className += 'check-form';\r\n    const divTask1 = document.createElement('div');\r\n    divTask1.className += 'task-footer';\r\n    const check1 = document.createElement('i');\r\n    check1.className += 'far fa-check-circle';\r\n    const checkbox1 = document.createElement('input');\r\n    checkbox1.className += 'done-task'\r\n    checkbox1.setAttribute('type', 'checkbox');\r\n    const divTask2 = document.createElement('div');\r\n    divTask2.className += 'task-footer';\r\n    const check2 = document.createElement('i');\r\n    check2.className += 'far fa-flag';\r\n    const spanFooter = document.createElement('span');\r\n    spanFooter.className += 'task-priority';\r\n    spanFooter.innerHTML = `${tsPriority}`;\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.className += 'delete-task';\r\n    const trashBin = document.createElement('i');\r\n    trashBin.className += 'fas fa-trash-alt';\r\n\r\n    addTask.appendChild(newTask);\r\n    newTask.appendChild(span);\r\n    span.appendChild(p1);\r\n    span.appendChild(p2);\r\n    span.appendChild(div1);\r\n    div1.appendChild(divTask1);\r\n    divTask1.appendChild(check1);\r\n    divTask1.appendChild(checkbox1);\r\n    div1.appendChild(divTask2);\r\n    divTask2.appendChild(check2);\r\n    divTask2.appendChild(spanFooter);\r\n    newTask.appendChild(deleteButton);\r\n    deleteButton.appendChild(trashBin);\r\n}\r\n\r\nconst taskForm = document.querySelector('.projects')\r\n// console.log(taskForm)\r\ntaskForm.addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        const form = e.target;\r\n        const task = form.querySelector('input[name=\"task-name\"]').value\r\n        const taskDate = form.querySelector('input[name=\"task-date\"]').value\r\n        const taskPriority = form.querySelector('select[name=\"priority\"]').value\r\n        const cTask = new taskDetails(task, taskDate, taskPriority);\r\n        const parent = form.parentElement;\r\n        const indices = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"]().length\r\n        console.log(parent, indices)\r\n        const parIndex = parent.getAttribute('data-index');\r\n        // console.log(parIndex)\r\n        // console.log(parIndex, e.target)\r\n        _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"](cTask, parIndex);\r\n        createTask(cTask.taskName, cTask.dueDate, cTask.priority, parIndex);\r\n    });\r\n\r\n// const taskForm = document.querySelectorAll('.new-task')\r\n// // console.log(taskForm)\r\n// taskForm.forEach(function(form){\r\n//     form.addEventListener('submit', function (e) {\r\n//         e.preventDefault();\r\n//         const task = form.querySelector('input[name=\"task-name\"]').value\r\n//         const taskDate = form.querySelector('input[name=\"task-date\"]').value\r\n//         const taskPriority = form.querySelector('select[name=\"priority\"]').value\r\n//         const cTask = new taskDetails(task, taskDate, taskPriority);\r\n//         const parent = form.parentElement;\r\n//         const parIndex = parent.getAttribute('data-index');\r\n//         // console.log(parIndex)\r\n//         // console.log(parIndex, e.target)\r\n//         Storage.addTask(cTask, parIndex);\r\n//         createTask(cTask.taskName, cTask.dueDate, cTask.priority, parIndex);\r\n//     })\r\n// })\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./storage.js":
/*!********************!*\
  !*** ./storage.js ***!
  \********************/
/*! exports provided: createArray, addProject, getProjects, updateProject, addTask, deleteProject, removeTask, clearStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArray\", function() { return createArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProject\", function() { return updateProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStorage\", function() { return clearStorage; });\nlet projects;\r\n\r\nfunction createArray(){\r\n    projects = [];\r\n}\r\n\r\nfunction addProject(project) {\r\n    if(localStorage.getItem('myProjects') === null){\r\n        createArray();\r\n    } else {\r\n        projects = JSON.parse(localStorage.getItem('myProjects'));\r\n    }\r\n    console.log(projects);\r\n    projects.push(project);\r\n    localStorage.setItem('myProjects', JSON.stringify(projects));\r\n    console.log('Project added Successfully', project)\r\n}\r\n\r\n\r\nfunction getProjects(){\r\n    if(JSON.parse(localStorage.getItem('myProjects')) === null){\r\n        createArray();\r\n        console.log(\"Local storage empty\");\r\n        return projects;\r\n    } else {\r\n        projects = JSON.parse(localStorage.getItem('myProjects'));\r\n    }\r\n    return projects;\r\n}\r\n\r\nfunction updateProject(){\r\n    if (localStorage.getItem('myProjects')){\r\n\r\n    }\r\n}\r\n\r\nfunction addTask(task, project){\r\n    projects = JSON.parse(localStorage.getItem('myProjects'));\r\n    let index = parseInt(project);\r\n    // console.log(index)\r\n    projects[index].tasks.push(task);\r\n    // console.log(projects[index]);\r\n    localStorage.setItem('myProjects', JSON.stringify(projects))\r\n    console.log('task added successfully', task);\r\n}\r\n\r\nfunction deleteProject(key){\r\n    return localStorage.removeItem(`${key}`)\r\n}\r\n\r\nfunction removeTask(key){\r\n    localStorage.removeItem(`${key}`)\r\n}\r\n\r\nfunction clearStorage(){\r\n    localStorage.clear();\r\n}\n\n//# sourceURL=webpack:///./storage.js?");

/***/ })

/******/ });