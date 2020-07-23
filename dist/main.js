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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ## PHASE 1\n// Add event listener for new project and publish the results to the DOM -- //\n\n// Add event listener for new task input form for adding newly created tasks to the DOM\n\n// ## PHASE 2\n// Change background of task upon being chekced as complete\n// deleting a task from the DOM\n// deleting project from DOM\n\n// ## PHASE 3\n// reveal/hide new project form\n// expand/contract project view (hiding the form and the tasks)\n\n///////////// const myProjects = []; /////////////////\n\n//Should be in it's own module file\n\nlet myProjects = []\n\nfunction taskDetails(name, date, priority) {\n    this.taskName = name,\n        this.dueDate = date,\n        this.priority = priority\n}\n\nfunction project(name, description) {\n    this.name = name,\n        this.description = description,\n        this.tasks = []\n}\n\nconst task1 = new taskDetails('add task', '12/13/14', 'HIGH')\n\n// console.log(task1.taskName)\n\nfunction createNewProjectForm(attatchTo) {\n    const createForm = document.createElement('form')\n    createForm.className += 'new-task';\n    const returnForm = () => {\n        return createForm;\n    };\n    const h3 = document.createElement('h3')\n    h3.innerText = 'New Task'\n\n    // label plus input field for TASK-NAME: \n    const taskInputLabel = document.createElement('label');\n    taskInputLabel.setAttribute('for', 'task-name');\n    taskInputLabel.innerHTML = 'Task Name: ';\n\n    const taskInput = document.createElement('input');\n    taskInput.className += 'task-input';\n    taskInput.setAttribute('type', 'text');\n    taskInput.setAttribute('name', 'task-name');\n\n    // label plus input field for DUE-DATE:\n    const dateInputLabel = document.createElement('label');\n    dateInputLabel.setAttribute('for', 'task-date');\n    dateInputLabel.innerHTML = 'Due Date: ';\n\n    const dateInput = document.createElement('input');\n    dateInput.className += 'task-input';\n    dateInput.setAttribute('type', 'date');\n    dateInput.setAttribute('name', 'task-date');\n\n    //create the SELECT menu\n    const selectLabel = document.createElement('label');\n    selectLabel.setAttribute('for', 'priority');\n    selectLabel.innerHTML = 'Priority: ';\n\n    const select = document.createElement('select');\n    select.className += 'task-input-dd';\n    select.setAttribute('name', 'priority');\n\n    //create OPTIONS for the select menu\n    const optionOne = document.createElement(\"option\");\n    optionOne.setAttribute('value', 'high')\n    optionOne.text = \"high\";\n    const optionTwo = document.createElement(\"option\");\n    optionTwo.setAttribute('value', 'medium')\n    optionTwo.text = \"medium\";\n    const optionThree = document.createElement(\"option\");\n    optionThree.setAttribute('value', 'low')\n    optionThree.text = \"low\";\n\n    //add OPTIONS to the SELECT menu\n    select.add(optionOne)\n    select.add(optionTwo)\n    select.add(optionThree)\n\n    //add the SUBMIT button\n    const submitBtn = document.createElement('input');\n    submitBtn.className += 'add-task';\n    submitBtn.setAttribute('type', 'submit');\n    submitBtn.setAttribute('value', '+ Add Task');\n\n    //FINALLY, APPEND the elements Together to the form\n    createForm.appendChild(h3)\n    createForm.appendChild(taskInputLabel);\n    createForm.appendChild(taskInput);\n    createForm.appendChild(dateInputLabel);\n    createForm.appendChild(dateInput);\n    createForm.appendChild(selectLabel);\n    createForm.appendChild(select);\n    createForm.appendChild(submitBtn);\n    attatchTo.appendChild(createForm);\n\n    returnForm\n}\n\nconst projectForm = document.querySelector('.add-project')\nprojectForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    const projectName = projectForm.querySelector('input[name=\"project-name\"]').value;\n    const projectDesc = projectForm.querySelector('input[name=\"project-desc\"]').value;\n\n    //Create Project Object\n    let projectNew = new project(projectName, projectDesc);\n    console.log(projectNew)\n    myProjects.push(projectNew);\n    //\n    let createdProj = myProjects[0]\n    console.log(createdProj)\n\n    const addProject = document.querySelector('.projects');\n    const newProject = document.createElement('div');\n    newProject.className += 'to-do';\n    const h2 = document.createElement('h2');\n    h2.className += 'to-do-title';\n    const p = document.createElement('p');\n    p.className += 'to-do-description';\n    h2.innerHTML = `${myProjects[0].name}`;\n    p.innerHTML = `${myProjects[0].description}`;\n    const deleteProject = document.createElement('button');\n    deleteProject.className += 'dlt-prjct';\n    deleteProject.innerHTML = 'Delete Project';\n\n    addProject.appendChild(newProject);\n    newProject.appendChild(h2);\n    newProject.appendChild(p);\n    createNewProjectForm(newProject);\n    newProject.appendChild(deleteProject);\n});\n\n\nconst taskForm = document.querySelector('.new-task')\ntaskForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    const taskName = taskForm.querySelector('input[name=\"task-name\"]').value\n    const taskDate = taskForm.querySelector('input[name=\"task-date\"]').value\n    const taskPriority = taskForm.querySelector('select[name=\"priority\"]').value\n    const cTask = new taskDetails(taskName, taskDate, taskPriority);\n\n\n    console.log(cTask)\n    myProjects[0].tasks.push(cTask)\n    console.log(myProjects[0].tasks)\n\n\n    console.log(taskPriority);\n    const addTask = document.querySelector('.to-do');\n    const newTask = document.createElement('div');\n    newTask.className += 'task-list'\n    const span = document.createElement('span');\n    span.className += 'task-text';\n    const p1 = document.createElement('p');\n    p1.className += 'task-desc';\n    p1.innerHTML = `${myProjects[0].tasks.taskName}`;\n    const p2 = document.createElement('p');\n    p2.className += 'due-date';\n    p2.innerHTML = `${myProjects[0].tasks.dueDate}`;\n    const div1 = document.createElement('div');\n    div1.className += 'check-form';\n    const divTask1 = document.createElement('div');\n    divTask1.className += 'task-footer';\n    const check1 = document.createElement('i');\n    check1.className += 'far fa-check-circle';\n    const checkbox1 = document.createElement('input');\n    checkbox1.className += 'done-task'\n    checkbox1.setAttribute('type', 'checkbox');\n    const divTask2 = document.createElement('div');\n    divTask2.className += 'task-footer';\n    const check2 = document.createElement('i');\n    check2.className += 'far fa-flag';\n    const spanFooter = document.createElement('span');\n    spanFooter.className += 'task-priority';\n    spanFooter.innerHTML = `${myProjects[0].tasks.priority}`;\n    const deleteButton = document.createElement('button');\n    deleteButton.className += 'delete-task';\n    const trashBin = document.createElement('i');\n    trashBin.className += 'fas fa-trash-alt';\n\n    addTask.appendChild(returnForm());\n    returnForm().appendChild(span);\n    span.appendChild(p1);\n    span.appendChild(p2);\n    span.appendChild(div1);\n    div1.appendChild(divTask1);\n    divTask1.appendChild(check1);\n    divTask1.appendChild(checkbox1);\n    div1.appendChild(divTask2);\n    divTask2.appendChild(check2);\n    divTask2.appendChild(spanFooter);\n    newTask.appendChild(deleteButton);\n    deleteButton.appendChild(trashBin);\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });