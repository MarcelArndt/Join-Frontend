
let PERSONAL_BACKEND_URL = 'http://127.0.0.1:8000/api/'

function checkForToken(sendBack=false){
    access = localStorage.getItem("access");
    if(access) return true;
    if(sendBack) window.location.href = 'start.html';
    return false;
}

function returnHeaders(token){
    let number = token? 0 : 1;
    const headers = [
        {
            "Authorization": `Token ${token}`,
            'Content-Type': 'application/json' 
        },
        {  
            'Content-Type': 'application/json' 
       }
    ]
    return (headers[number])
}

// Allgemeine Funktionen
async function setItem(path = "", value = "", method = 'Put') {
    let url = PERSONAL_BACKEND_URL + path + "/";
    const token = localStorage.getItem("access");
    let response = await fetch(url, {
        method: method,
        headers: returnHeaders(token),
        body: value
    });
    return await response.json();
}

async function getItem(path = "") {
    const url = PERSONAL_BACKEND_URL + path + '/?format=json';
    const token = localStorage.getItem("access");
    let response = await fetch(url,
        {
            method: 'GET',
            mode: 'cors',
            headers: returnHeaders(token),
        });
    return await response.json();
}

// Daten speichern
async function storeTasks() {
    let tasksAsText = JSON.stringify(tasks);
    await setItem('tasks', tasksAsText);
}

async function storeContacts() {
    let contactsAsText = JSON.stringify(contacts);
    await setItem('contacts', contactsAsText);
}

async function createUserInDatabank(user) {
    const body = JSON.stringify({
        "userID": user.userID,
        "repeated_password" : user.password,  
        "password" : user.password,  
        "username" : user.name,
        "email" : user.email});
    content = await setItem(path = "auth/registration", value = body, 'POST')
    localStorage.setItem("access", content.token)
}

// Daten laden
async function checkForValidEmail(email){
    const url = `${PERSONAL_BACKEND_URL}auth/check-email/`;
    let response = await fetch( url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(            {
          "email" : email
      })
    });
    const emailIsValid = await response.json()
    return emailIsValid.isValidEmail
}

async function loadTasks() {
    tasks = []
    if(!checkForToken()) return;
    const loadedTasks = await getItem('tasks');
    if (loadedTasks) tasks = await loadedTasks;
}

async function loadSummaryDetails() {
    summaryDetails = {}
    if(!checkForToken()) return;
    const details = await getItem('summary-detail');
    if (details && details.taskInBoard != 0) summaryDetails = await details;
}

async function loadContacts() {
    contacts = []
    if(!checkForToken()) return;
    const loadedContacts = await getItem('contacts');
    if (loadedContacts && !loadedContacts.detail) contacts = await loadedContacts;
}

async function loadUsers() {
    users = []
    if(!checkForToken()) return;
    const loadedUsers = await getItem('auth/users');
    if (loadedUsers && !loadedUsers.detail) users = await loadedUsers;
}

async function loadActualUser() {
    actualUser = "Guest"
    userData = {}
    if(!checkForToken()) backToStartSite();
    try{
        userData = await findUserByTokenAndGetData();
    } catch(error){
    }
    if(!userData.isToken){
        backToStartSite()
    }
    contactData = await findContactByEmail(userData);
}

async function findUserByTokenAndGetData(){
    const token = localStorage.getItem("access")
    const body = {"token": token}
    const user = await setItem('auth/find-by-token', JSON.stringify(body), "POST")
    if (user && user.name && user.name == "Guest"){
        actualUser = {
            "isToken": true,
            "color": "#fff",
            "name" : "Guest",
            "email" : "",
            "phone" : "",
            "initials" : "G"
        }
        return actualUser
    }
    return {isToken: user.isToken, email: user.email, name: user.name}
}

function backToStartSite(){
    window.location.href = 'start.html';
}

async function findContactByEmail(userData){
    if(!userData.isToken) return
    let contact = {}
    if(userData.name == "Guest"){
    contact = {
        "name" : "Guest",
        "email" : "",
        "color" : "#fff",
        "phone" : "#fff",
    }
    return contact
    }
    const body = {"email": userData.email}
    contact = await setItem('contacts/find-by-email', JSON.stringify(body), "POST")
    actualUser = contact
}

// Daten löschen
async function deleteStoredTasks() {
    await setItem('tasks', null); // Löscht die Tasks in der Firebase-Datenbank
}

async function deleteStoredUsers() {
    await setItem('users', null);
}

async function deleteStoredContacts() {
    await setItem('contacts', null);
}

async function deleteRememberMe() {
    await setItem('rememberMe', null);
}

// Beispiel für die Nutzung
// await storeTasks(); // Speichert `tasks`
// await loadTasks();  // Lädt `tasks`
// await deleteStoredTasks(); // Löscht `tasks`
