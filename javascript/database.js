
let tasks = [];
let currentTaskId = [];
let actualTask;
let contacts = [];
let actualContact;
let users = [];
let summaryDetails = {}
let actualUser = "Guest";
let subtasksOfActualTask = [];
let actualSubtask;

//********************
//Structure of JSON
//********************

let task = {
  taskID: { String },
  title: { String },
  description: { String },
  assignedTo: [{ contactID: { String } }, { contactID: { String } }],
  dueDate: { Date },
  priority: { String },
  category: { String },

  subtasks: [
    {
      subTaskID: { String },
      subTaskName: { String },
      done: { Boolean },
    },
    {
      subTaskID: { String },
      subTaskName: { String },
      done: { Boolean },
    },
  ],
  currentProgress: { Number },
};

let subtask = {
  subTaskID: { String },
  subTaskName: { String },
  done: { Boolean },
};

let contact = {
  contactID: { String },
  name: { String },
  email: { String },
  phone: { String },
  initials: { String },
  color: { String },
};

let user = {
  userID: { String },
  email: { String },
  password: { String },
  name: { String },
};

/** generates unique ID from random Numbers
 *
 * @yields {string}
 */
function createID() {
  let id = "";
  let numbers = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvxyz";
  for (let i = 0; i < 16; i++) {
    id += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return id;
}

/** create task-Object with given parameters, automatically add an ID and push it to the tasks-Array
 * then store it in the remoteStorage.
 *
 * @param {String} title
 * @param {String} description
 * @param {Array} assignedTo
 * @param {Date} dueDate
 * @param {String} priority
 * @param {String} category
 * @param {Array} subtasks
 * @param {Number} currentProgress
 */
function createTask(
  title,
  description,
  assignedTo,
  dueDate,
  priority,
  category,
  subtasks
) {
  let task = {
    taskID: "",
    title: title,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    priority: priority,
    category: category,
    subtasks: subtasks,
    currentProgress: currentColumn,
  };
  task["taskID"] = currentTaskId = createID();
  tasks.push(task);
  storeTasks();
}

/**returns a Task-Object with a given ID from the Tasks-Array. If not found returns null
 * and logs a warning.
 *
 * @param {String} id
 * @returns {Object}
 */
function getTaskFromID(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskID == id) {
      return tasks[i];
    }
  }
  return null;
}

/**
 * returns Index of Task with given ID in array tasks, returns -1 if not found
 * @param {String} id
 * @returns {Number}
 */
function getIndexOfTasksById(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskID == id) {
      return i;
    }
  }
  return -1;
}

/**
 *  function deletes a task from the tasks-Aray given its ID
 * @param {String} id
 */
function deleteTask(id) {
  let index = getIndexOfTasksById(id);
  tasks.splice(index, 1);
}

/**Saves the actualTask after Editing at the same position in the tasks Array
 * it originated from. This preventing adding tasks with the same ID throuh editing.
 * @param {String} id
 */
function saveActualTask() {
  let id = actualTask.taskID;
  actualTask.subtasks = subtasksOfActualTask;
  let index = getIndexOfTasksById(id);
  if (index > -1) {
    tasks.splice(index, 1, actualTask);
  }
}

/**
 * With an given ID the Task with that ID is loaded from the TasksArray into
 * the ActualTask, ready to get the data or set data to edit it.
 * @param {String} id
 */
function setAsActualTask(id) {
  actualTask = getTaskFromID(id);
  subtasksOfActualTask = actualTask.subtasks;
}

/**
 * functions creates a subtask out of given content and returns the so created
 * subtask
 * @param {String} content
 * @returns {Object} Subtask JSON Object
 */
function createSubtask(content) {
  let subTask = {
    subTaskID: createID(),
    subTaskName: content,
    done: false,
  };
  return subTask;
}

/**
 * create a Subtask for a task stored in ActualTask.
 * The subtask is added to the subtasks of the task in actualTask.
 */
function addSubtask(content) {
  let subTask = {
    subTaskID: createID(),
    subTaskName: content,
    done: false,
  };
  subtasksOfActualTask.push(subTask);
}

/**
 * function finds the subtask of the task in actualTask by ID and deltes it.
 * @param {String} id
 */
function deleteSubtask(id) {
  index = getIndexOfSubtasksById(id);
  subtasksOfActualTask.splice(index, 1);
}

/**
 * function searches with ID for the according subtask of the task stores in actualTask and then loads in in actualSubtask
 * @param {String} id
 */
function getSubtaskByID(id) {
  index = getIndexOfSubtasksById(id);
  actualSubtask = subtasksOfActualTask[index];
}

/**
 * function saves the subtask in actualSubtask to the Task in actualTask.
 * @param {String} id
 */
function saveSubtask(id) {
  index = getIndexOfSubtasksById(id);
  subtasksOfActualTask.splice(index, 1, actualSubtask);
}

/**
 * function starts after subtask is loaded in actualSubtask
 */
function toggleDoneOfActualSubtask() {
  actualSubtask.done = !actualSubtask.done;
}

/**
 * the function look for a subtask in the Task stores in ActualTask with an given ID and returns its index or -1 if not found.
 * @param {String} id
 * @returns {number}
 */
function getIndexOfSubtasksById(id) {
  for (let i = 0; i < subtasksOfActualTask.length; i++) {
    if (subtasksOfActualTask[i].subTaskID == id) {
      return i;
    }
  }
  return -1;
}

/**
 * returns the initials as a String from a given name consisting of multiple first names and surnames
 * @param {String} name
 * @returns {String}
 */
function getInitials(name) {
  let splitName = name.split(" ");
  let firstInitial = splitName[0][0].toUpperCase();
  let lastInitial = splitName[splitName.length - 1][0].toUpperCase();
  return firstInitial + lastInitial;
}

/**
 * returns the Contact-Object with the given ID from the contactsArray,
 * if not found returns null and logs warning
 * @param {String} id
 * @returns {Object}
 */
function getContactFromID(id) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].contactID == id) {
      return contacts[i];
    }
  }
  return null;
}

/**
 * creates a contact with given parameters and pushes it to the contactsArray
 * @param {String} name
 * @param {String} email
 * @param {String} phone
 */
async function createContact(name, email, phone) {
  let contact = {
    contactID: createID(),
    name: name,
    email: email,
    phone: phone,
    initials: getInitials(name),
    color: createContactColor(),
  };
  contacts.push(contact);
  await storeContacts();
}

/**
 * functions deletes a contact with a specific id out of the contacts-Array 
 */
async function deleteContact(idToRemove) {
  let check = checkContactIfUser(idToRemove);
  let indexToRemove = contacts.findIndex(contacts => contacts.contactID === idToRemove);

  if (check) {
  if (indexToRemove !== -1) {
    contacts.splice(indexToRemove, 1);
    await storeContacts();
    }
  }
}

/**
 * function searches for a contact with a given id in the contacts-Array
 * and returns the index or -1 if not found.
 * @param {String} id 
 * @returns {number}
 */
function getIndexOfContactById(id) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].contactID == id) {
      return i;
    }
  }
  return -1;
}

/**
 * function checks if a contact is a user and returns the boolean.
 * @param {String} id 
 * @returns {boolean}
 */
function checkContactIfUser(id) {
  for (let i = 0; i < contacts.length; i++) {
    if ((contacts[i].userID = id)) {
      return true;
    }
  }
  return false;
}

/**
 * function creates a user, creates also a contact for the user and the stores
 * the user in the storage.
 * @param {String} email 
 * @param {String} password 
 * @param {String} username 
 */
async function createUser(email, password, username) {
  let user = {
    userID: createID(),
    email: email,
    password: password,
    name: capitalizeName(username),
  };
  await createUserInDatabank(user);
  await createUserContact(user);
}

/**
 * function is given a user-Object and it creates a contact-Object with the same ID 
 * in the contacts array and then stores in the storage
 * @param {Object} user 
 */
async function createUserContact(user) {
  await loadContacts();
  let contact = {
    contactID: user.userID,
    name: user.name,
    email: user.email,
    initials: getInitials(user.name),
    color: createContactColor(),
  };
  contacts.push(contact);
  await storeContacts();
}

/**
* This function deleted all contacts
**/
function deletedAllContacts(){
  contacts.length = 0;
  storeContacts();
}

/**
 * This function logs out the current user and redirects to the index.html.
 */
function logout() {
  localStorage.setItem('rememberMe', '');
  localStorage.removeItem('rememberedEmail');
  localStorage.removeItem('rememberedPassword');
  localStorage.removeItem('access');
  window.location.href = "./start.html";
}