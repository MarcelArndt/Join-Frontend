const deafultContacts = [
    {
        "contactID": "OknsyIS7PNlcblIQ",
        "name": "Aida Steinbauer",
        "email": "steinbauer@web.de",
        "phone": "18227629765",
        "initials": "AS",
        "color": "#3904a3"
    },
    {
        "contactID": "GVx2BZkhf4LgHXwm",
        "name": "Benjamin Kaufmann",
        "email": "benjamin.kaufmann@hotmail.de",
        "phone": "17234218765",
        "initials": "BK",
        "color": "#1abc9c"
    },
    {
        "contactID": "Vj9CmYPd4WgkIbHt",
        "name": "Clara Weber",
        "email": "clara.weber@web.com",
        "phone": "17394826541",
        "initials": "CW",
        "color": "#f39c12"
    },
    {
        "contactID": "R82d7Z8qj5JXpg4D",
        "name": "David Müller",
        "email": "david.mueller@gmail.com",
        "phone": "17876543210",
        "initials": "DM",
        "color": "#e74c3c"
    },
    {
        "contactID": "Jd4Y8bVgJlmSkR9v",
        "name": "Eva Schmidt",
        "email": "eva.schmidt@web.com",
        "phone": "17023456789",
        "initials": "ES",
        "color": "#9b59b6"
    },
    {
        "contactID": "Q1LuP7kIftYJtRgA",
        "name": "Frank Hoffmann",
        "email": "frank.hoffmann@hotmail.de",
        "phone": "17765432109",
        "initials": "FH",
        "color": "#2980b9"
    },
    {
        "contactID": "W3Z6dZ4hjTnqXcP2",
        "name": "Gabriele Köhler",
        "email": "gabriele.koehler@outlook.de",
        "phone": "16876543210",
        "initials": "GK",
        "color": "#16a085"
    },
    {
        "contactID": "D4Oxh8R2qJk2i9Bt",
        "name": "Heinz Wagner",
        "email": "heinz.wagner@outlook.com",
        "phone": "16543210987",
        "initials": "HW",
        "color": "#34495e"
    },
    {
        "contactID": "V6N9CuI3Dr7i6vT1",
        "name": "Isabella Fischer",
        "email": "isabella.fischer@gmail.com",
        "phone": "17456473821",
        "initials": "IF",
        "color": "#e67e22"
    },
    {
        "contactID": "N5KhLxM7RwGjB9Ds",
        "name": "Jan Bauer",
        "email": "jan.bauer@hotmail.de",
        "phone": "17987654321",
        "initials": "JB",
        "color": "#c0392b"
    },
    {
        "contactID": "A5MkR7xTnG8Z3HwD",
        "name": "Karl Weber",
        "email": "karl.weber@gmail.com",
        "phone": "17654321098",
        "initials": "KW",
        "color": "#7f8c8d"
    },
    {
        "contactID": "T3GzN2K6Cp9JzLqV",
        "name": "Lena Schneider",
        "email": "lena.schneider@hotmail.com",
        "phone": "17276543210",
        "initials": "LS",
        "color": "#2ecc71"
    },
    {
        "contactID": "F9NmJ6QkH5p2ZrdG",
        "name": "Matthias Hoffmann",
        "email": "matthias.hoffmann@web.de",
        "phone": "17123456789",
        "initials": "MH",
        "color": "#9b59b6"
    },
    {
        "contactID": "Q7JbP1L0Hs2Zd9Kr",
        "name": "Nina Müller",
        "email": "nina.mueller@web.com",
        "phone": "17876543211",
        "initials": "NM",
        "color": "#f1c40f"
    },
    {
        "contactID": "U2MwR8G3Sp0Vd1Xj",
        "name": "Oliver Becker",
        "email": "oliver.becker@outlook.com",
        "phone": "17987654322",
        "initials": "OB",
        "color": "#f39c12"
    },
    {
        "contactID": "B1HcM5K9I2QwL0Yu",
        "name": "Paul Fischer",
        "email": "paul.fischer@hotmail.de",
        "phone": "17643210987",
        "initials": "PF",
        "color": "#8e44ad"
    },
    {
        "contactID": "P7LqZ1W8Cm6TxO4V",
        "name": "Quincy Weber",
        "email": "quincy.weber@web.de",
        "phone": "17432109876",
        "initials": "QW",
        "color": "#e74c3c"
    }
];


const newTaskList = [
    {
        taskID: "T011",
        title: "Neues Framework testen",
        category: "Testing",
        currentProgress: randomiseCurrentProgress(),
        description: "Ein neues Framework ausprobieren, das die Entwicklung von Frontend-Komponenten erleichtern soll.",
        dueDate: randomiseDate(),
        priority: "medium",
        color: "#3498db",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1101", subTaskName: "Dokumentation des Frameworks durchlesen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1102", subTaskName: "Erste kleine Anwendung erstellen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1103", subTaskName: "Testen von UI-Komponenten", done: randomiseTaskIsDone() }
        ]
    },
    {
        taskID: "T012",
        title: "Algorithmus optimieren",
        category: "technicalTask",
        currentProgress: randomiseCurrentProgress(),
        description: "Einen bestehenden Algorithmus optimieren, um die Laufzeit zu verkürzen.",
        dueDate: randomiseDate(),
        priority: "urgent",
        color: "#e74c3c",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1201", subTaskName: "Code-Profiling durchführen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1202", subTaskName: "Engpässe analysieren und verbessern", done: randomiseTaskIsDone() }
        ]
    },
    {
        taskID: "T013",
        title: "Bug im Code beheben",
        category: "bug",
        currentProgress: randomiseCurrentProgress(),
        description: "Ein kritischer Bug im Code, der zu unerwarteten Abstürzen führt, beheben.",
        dueDate: randomiseDate(),
        priority: "urgent",
        color: "#f39c12",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1301", subTaskName: "Fehlerquelle finden", done: randomiseTaskIsDone() },
            { subTaskID: "ST1302", subTaskName: "Bugfix implementieren", done: randomiseTaskIsDone() }
        ]
    },
    {
        taskID: "T014",
        title: "Neue Datenbank anlegen",
        category: "technicalTask",
        currentProgress: randomiseCurrentProgress(),
        description: "Eine neue relationale Datenbank für ein Projekt erstellen und verbinden.",
        dueDate: randomiseDate(),
        priority: "medium",
        color: "#16a085",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1401", subTaskName: "Datenbank-Design entwerfen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1402", subTaskName: "Tabellen und Beziehungen definieren", done: randomiseTaskIsDone() },
            { subTaskID: "ST1403", subTaskName: "Migration bestehender Daten", done: randomiseTaskIsDone() },
            { subTaskID: "ST1404", subTaskName: "Datenbank-Backups einrichten", done: randomiseTaskIsDone() }
        ]
    },
    {
        taskID: "T015",
        title: "Code-Review durchführen",
        category: "Analysis",
        currentProgress: randomiseCurrentProgress(),
        description: "Den Code eines Kollegen durchsehen und Verbesserungsvorschläge machen.",
        dueDate: randomiseDate(),
        priority: "medium",
        color: "#9b59b6",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1501", subTaskName: "Code auf Fehler prüfen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1502", subTaskName: "Verbesserungsvorschläge dokumentieren", done: randomiseTaskIsDone() }
        ]
    },
    {
        taskID: "T016",
        title: "Dokumentation für API schreiben",
        category: "documentation",
        currentProgress: randomiseCurrentProgress(),
        description: "Die API, die du für das Projekt entwickelt hast, dokumentieren.",
        dueDate: randomiseDate(),
        priority: "low",
        color: "#2ecc71",
        assignedTo: randomiseAssignedTo(),
        subtasks: [
            { subTaskID: "ST1601", subTaskName: "Endpoints und Funktionen beschreiben", done: randomiseTaskIsDone() },
            { subTaskID: "ST1602", subTaskName: "Beispielanfragen und -antworten hinzufügen", done: randomiseTaskIsDone() },
            { subTaskID: "ST1603", subTaskName: "Fehlerbehandlung und Rückgabewerte erklären", done: randomiseTaskIsDone() }
        ]
    },
];

function randomiseAssignedTo() {
    let alreadyUsedNumber = [];
    let newListWithContacts = [];
    let randomNumber = 0
    for (let i = 0; i < 20; i++) {
        randomNumber = Math.floor(Math.random() * deafultContacts.length)
        if (!alreadyUsedNumber.includes(randomNumber.toString())) {
            alreadyUsedNumber.push(randomNumber.toString());
            newListWithContacts.push(deafultContacts[randomNumber]);
        }
    }
    return newListWithContacts;
}

function randomiseTaskIsDone() {
    return Math.floor(Math.random() * 2) == 1 ? true : false;
}

function randomiseCurrentProgress() {
    return Math.floor(Math.random() * 4)
}

async function restoreBoard() {
    await baordLoadTasks();
    await initialsOf();
    sortLoadetTasks();
    cleanAllColums();
    checkForCard();
    showNoCard(true);
    initDropZone();
    showDropZone(0, true, false);
}

function emptyBoard() {
    toDo = [];
    inProgress = [];
    awaitFeedback = [];
    isDone = [];
    list = [toDo, inProgress, awaitFeedback, isDone];
    taskObjects = [];
}

function randomiseDate() {
    const today = new Date();
    const randomDay = getrandomDay(today);
    const newMonth = today.getMonth() + randomDay[1] > 11 ? randomDay[1] - (11 - today.getMonth()) : today.getMonth() + randomDay[1];
    const year = today.getMonth() + randomDay[1] > 11 ? today.getFullYear() + 1 : today.getFullYear();
    return `${year}-${getTimeValueOf_asString(newMonth + 1)}-${getTimeValueOf_asString(randomDay[0])}`;
}

function getrandomDay(today) {
    const randomNumber = Math.floor(Math.random() * 165);
    const addAmountOfMonth = Math.ceil(randomNumber / 28);
    const remainingDays = randomNumber - ((addAmountOfMonth - 1) * 28);
    return [remainingDays, addAmountOfMonth];
}

function getTimeValueOf_asString(value) {
    const string = value.toString();
    const newValue = string.length < 2 ? `0${string}` : string;
    return newValue;
}

////////////////////////////////////////
/////  ---  Consolen-Befehle  ---  /////
////////////////////////////////////////

async function initRestoreTask() {
    await deleteStoredTasks();
    tasks = newTaskList;
    await storeTasks();
    emptyBoard();
    await restoreBoard()
    console.info('Task are restored');
}

async function initRestoreContacts() {
    await loadContacts();
    await deleteStoredContacts();
    contacts = deafultContacts;
    await storeContacts();
    console.info('Contacts are restored');
}

async function initRestoreAllData() {
    await initRestoreTask();
    await initRestoreContacts();
}