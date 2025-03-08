/**
 * loads function that have to be loaded upFront.
 */
async function onload() {

  await loadActualUser();
  initMobileGreeting();
  await loadSummaryDetails();
  await loadTasks();
  await initialsOf();
  renderSummary();
}

/**
 * Renders all html fields for the Site
 */
function renderSummary() {
  renderGreeting();
  renderNumberToDo();
  renderNumberDone();
  renderNumberUrgent();
  renderUpcomingDueDate();
  renderNumberTaksInBoard();
  renderNumberInProgress();
  renderNumberAwaitingFeedback();
}

/**
 * Renders the Greeting Area, consisting of Daytime and the Username, if a User
 * is logged in.
 */
function renderGreeting() {
  renderDaytime("greetingname");
  renderUserName("username");
}

/**
 * Renders the Daytime for the greeting and
 * chosing the right punctuation, in case there is a personal
 * greeting for a logged in user
 */
function renderDaytime(divId) {
  let daytime = actualHour();
  let greeting = getGreeting(daytime);
  let field = document.getElementById(divId);
  if (actualUser.name) {
    //Condition that a User is logged in
    field.innerHTML = greeting + ",";
  } else {
    field.innerHTML = greeting + "!";
  }
}

/**
 * this function is given the hour of the day and  returns
 * an apropiate Greeting text
 * @param {Number} daytime
 * @returns {String} apropiate Greeting text
 */

function getGreeting(daytime) {
  switch (true) {
    case daytime >= 22 && daytime < 24:
      return "It is nighttime";

    case daytime >= 0 && daytime < 5:
      return "It is nighttime";

    case daytime >= 5 && daytime < 12:
      return "Good morning";

    case daytime >= 12 && daytime < 14:
      return "Lunchtime";

    case daytime >= 14 && daytime < 18:
      return "Good afternoon";

    case daytime >= 18 && daytime < 22:
      return "Good evening";
  }
}

/**
 * functions renders the Username for a loggedIn User
 * or returns an empty string if no user is logged in
 */
function renderUserName(divID) {
  let user;
  field = document.getElementById(divID);

  if (actualUser.name) {
    user = actualUser.name;
    field.innerHTML = user;
  } else {
    field.innerHTML = "";
  }
}

/**
 * function renders the amount of tasks with the progress
 * "to Do"
 */
function renderNumberToDo() {
  let field = document.getElementById("number-to-do");
  if(summaryDetails && summaryDetails.taskInToDo !== undefined){
    field.innerHTML = summaryDetails.taskInToDo;
  } else {
    field.innerHTML = 0
  }

}

/**
 * function renders the amount of tasks with the progress
 * "done"
 */

function renderNumberDone() {
  let field = document.getElementById("number-done");
  if(summaryDetails && summaryDetails.taskInDone !== undefined){
    field.innerHTML = summaryDetails.taskInDone;
  }
  else{
    field.innerHTML = 0
  }
}

/**
 * function renders the amount of tasks with the priority
 * "urgent"
 */
function renderNumberUrgent() {
  let field = document.getElementById("number-urgent");
  if(summaryDetails && summaryDetails.urgendTaskUpcoming && summaryDetails.urgendTaskUpcoming.amount !== undefined){
    field.innerHTML = summaryDetails.urgendTaskUpcoming.amount;
  } else {
    field.innerHTML = 0
  }

}

/**
 * functions renders the amount of tasks in the whole board
 */
function renderNumberTaksInBoard() {
  let field = document.getElementById("numberTasksinboard");
  if(summaryDetails && summaryDetails.taskInBoard !== undefined){
    field.innerHTML = summaryDetails.taskInBoard;
  }
  else {
    field.innerHTML = 0
  }

}

/**
 *  funtion renders the amount of tasks with the progress
 * "in progress"
 */
function renderNumberInProgress() {
  let field = document.getElementById("number-tasksinprogress");
  if(summaryDetails && summaryDetails.taskInProgress !== undefined){
    field.innerHTML = summaryDetails.taskInProgress;
  } else {
    field.innerHTML = 0
  }
}

/**
 * function renders the earlist upcoming duedate and
 * triggers an alarm if need be
 */
function renderUpcomingDueDate() {
  let field = document.getElementById("deadlineDate");
  let date = getEarliestDateOfNotDone();
  let danger = isDateEarlierThanTomorrow(date);
  if (danger) {
    //Mach URGENT Farbe und BLINKI BLINKI
    alarm();
  }
  if (date != 0) {
    date = convertDate(date);
    field.innerHTML = date;
  } else {
    field.innerHTML = "no Date";
  }
}

/**
 * function renders amount of tasks with progress
 * "await feedback"
 */
function renderNumberAwaitingFeedback() {
  let field = document.getElementById("number-awaitingfeedback");
  if(summaryDetails && summaryDetails.taskInFeedback !== undefined){
    field.innerHTML = summaryDetails.taskInFeedback;
  } else {
    field.innerHTML = 0
  }

}

/**
 * function delivers earliest date of all tasks with the progess "not done" and
 * then remembers what task exactly had the earliest date of them all.
 * @returns {number}
 */
function getEarliestDateOfNotDone() {
  let earliestDate = 0;
  if (summaryDetails.urgendTaskUpcoming && summaryDetails.urgendTaskUpcoming.dueDate !== undefined) {
    earliestDate = summaryDetails.urgendTaskUpcoming.dueDate
  }
  else{
    earliestDate = 0
  }
  return earliestDate;
}

/**
 * functon converts a DateString from format yyyy-mm-dd to format month-dd-yyyy
 * @param {String} datumString
 * @returns {String}
 */

function convertDate(dateString) {
  // Datum parsen
  let dateParts = dateString.split("-");
  let year = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let day = parseInt(dateParts[2]);

  // Monatsnamen-Array
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Monatsnamen erhalten
  let monthsName = monthNames[month - 1];

  // Formatieren und zurückgeben
  let formattedDate = monthsName + " " + day + ", " + year;
  return formattedDate;
}

/**
 * functions checks if a given date is earlier than the date of tomorrow
 *
 * @param {date} date
 * @returns {boolean}
 */
function isDateEarlierThanTomorrow(date) {
  let danger = false;
  let actualDate = getActualDate();

  if (date <= actualDate) {
    danger = true;
  } else {
    danger = false;
  }

  return danger;
}

/**
 * function returns the actual date in format yyyy-mm-dd
 * @returns {String}
 */
function getActualDate() {
  let now = new Date();
  let year = now.getFullYear();
  var month = ("0" + (now.getMonth() + 1)).slice(-2); 
  var day = ("0" + now.getDate()).slice(-2); 

  return year + "-" + month + "-" + day;
}

/**
 * function returns the actual hour of the day
 * @returns {Number}
 */
function actualHour() {
  let now = new Date();
  let hour = now.getHours();
  return hour;
}

/**
 * function goes to the board and at the same time searches for the task
 * which id is stored
 */
function goToBoard() {
  if(summaryDetails.urgendTaskUpcoming && summaryDetails.urgendTaskUpcoming.taskId !== undefined){
    window.location.href =
    "./board.html?findtaskbyid=" + encodeURIComponent(summaryDetails.urgendTaskUpcoming.taskId);
  }
}

/**functions goes to Board */
function goToBoardUsual(mark) {
  window.location.href = `./board.html#${mark}`;
}

/**
 * controls the greeting with a modal when the page is in responsive mode
 * the delay of fadeout and hide has to be adjusted to the length of the
 * fadeout animation and the time the user is shown the modal
 */
function initMobileGreeting() {
  disableScroll();
  renderMobileModal();
  setTimeout(faddeoutModal, 800);
  setTimeout(hideModal, 1200);
}

/**
 * hide the responsive greeting modal after a given time
 */
function hideModal() {
  let greetingModal = document.getElementById("modalMobileGreeting");
  greetingModal.style.display = "none";
  enableScroll();
}

/**
 * fades aout the modal, the time needed for that is written in the CSS
 * for #modalMobileGreeting
 */
function faddeoutModal() {
  let greetingModal = document.getElementById("modalMobileGreeting");
  greetingModal.style.opacity = 0;
}

/**
 * renders the mobile Greeting Modal
 */
function renderMobileModal() {
  renderDaytime("greetingname2");
  renderUserName("username2");
}

/**
 * function is called when Mobile greeting is active to
 * prevent user from scrolling when the modal is shown
 *
 */
function disableScroll() {
  document.body.style.overflow = "hidden";
}

/**
 * function is called when mobile greeting is over to let
 * the user scroll again
 */
function enableScroll() {
  document.body.style.overflow = ""; // Setzt den Overflow-Stil zurück, um das Scrollen zu aktivieren
}
