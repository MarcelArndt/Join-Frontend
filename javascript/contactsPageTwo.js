/**
 * This function show required text between the gap of the input fields in the desktop version
 */
function requiredTextBetweenInputFieldInTheDesktopVersion(choice){
    document.getElementById(`required-${choice}`).style.display = "block";
    document.getElementById(`required-${choice}`).style.margin = "0.5rem 0 0 0.5rem";
    document.getElementById(`required-${choice}`).style.minHeight = "1.932rem";
    document.getElementById(`ltitle${choice}`).style.outline = '2px solid red'; 
}

/**
 *  This function change back the color for the create contact button on the addcontact page.
 */
function changeBackColorFromButtonAddContactPage(){
    let eventButton = document.getElementById('button-createcontact');

    if(eventButton.disabled){
        document.getElementById('button-createcontact').style.backgroundColor='#E5E5E5';
        document.getElementById('button-createcontact').style.cursor = "default";
    }
    if(!eventButton.disabled){
        document.getElementById('button-createcontact').style.backgroundColor='#25C0D4';
    }
}

/** 
 * This function remove the focus from input field.
*/    
function removesFocusFromInputField(){
    document.getElementById('ltitlename').blur();
    document.getElementById('ltitleemail').blur();
    document.getElementById('ltitlephone').blur();
} 

/**
*  This function checks the validity of input name, e-mail and phone. If the mouse is above the button and if the validation isn't correct, 
*  the border of the elements ltitlename, ltitleemail, ltitlephone and text "This field is required" will be white.
*/
function validityFalseLeaveButtonWhiteBorder(){
    let statusValidationName = document.getElementById('ltitlename');
    let statusValidationEmail = document.getElementById('ltitleemail');
    let statusValidationPhone = document.getElementById('ltitlephone');

    changeColorFromButtonAddContactPage();
    checkValidationByTrueBorderInvisible(statusValidationName,statusValidationEmail,statusValidationPhone);
}

/**
 *  This function check the Validation from input field and if it true. The color of border will be invisible.
 */
function checkValidationByTrueBorderInvisible(statusValidationName,statusValidationEmail,statusValidationPhone){
    if(!statusValidationName.checkValidity() || !statusValidationEmail.checkValidity() || !statusValidationPhone.checkValidity()){
        document.getElementById('requiredtext').style.border = '';   
    }
    if(!statusValidationName.checkValidity()){
        checkedNameAndStyleTheGap();
    }
    if(!statusValidationEmail.checkValidity()){
        checkedEmailAndStyleTheGap();
    }
    if(!statusValidationPhone.checkValidity()){
        checkedPhoneAndStyleTheGap();
    }
}

/**
 * This function checked the validation and style the gap between input field in the mobile and desktop version
 */
function checkedNameAndStyleTheGap(){
    if(screen.width < 1000){
        styleTheGapBetweenInputFieldMobile('name');
    } else {
        styleTheGapBetweenInputFieldDesktop('name');
    }
}

/**
 * This function checked the validation and style the gap between input field in the mobile and desktop version
 */
function checkedEmailAndStyleTheGap(){
    if(screen.width < 1000){
        styleTheGapBetweenInputFieldMobile('email');
    } else {
        styleTheGapBetweenInputFieldDesktop('email'); 
    }
}

/**
 * This function checked the validation and style the gap between input field in the mobile and desktop version
 */
function checkedPhoneAndStyleTheGap(){
    if(screen.width < 1000){
        styleTheGapBetweenInputFieldMobile('phone');
    } else {
        styleTheGapBetweenInputFieldDesktop('phone');
    }
}

/**
 * This function style the gap between the input fields in the mobile version
 */
function styleTheGapBetweenInputFieldMobile(choice){
    document.getElementById(`required-${choice}`).style.display = "block";
    document.getElementById(`required-${choice}`).style.margin = "0.3rem 0 0 0.625rem";
    document.getElementById(`required-${choice}`).style.height = "1.5rem";
    document.getElementById(`ltitle${choice}`).style.outline = ''; 
    document.getElementById(`required-${choice}`).innerHTML = '';
}

/**
 * This function style the gap between the input fields in the desktop version
 */
function styleTheGapBetweenInputFieldDesktop(choice){
    document.getElementById(`required-${choice}`).style.margin = "0.5rem 0 0 0.5rem";
    document.getElementById(`required-${choice}`).style.minHeight = "1.932rem";
    document.getElementById(`ltitle${choice}`).style.outline = ''; 
    document.getElementById(`required-${choice}`).innerHTML = '';
}

/**
 *  This function change back the color for the create contact button on the addcontact page.
 */

function changeColorFromButtonAddContactPage(){
    let eventButton = document.getElementById('button-createcontact');

    if(eventButton.disabled){
        document.getElementById('button-createcontact').style.backgroundColor='#E5E5E5';
    }
    if(!eventButton.disabled){
        document.getElementById('button-createcontact').style.backgroundColor='#2A3647';
    }
}

/**
 * This function transform the first letter of a word upper-case
*/
function capitalizeFirstLetter(string) {
    let stringArray = string.split(" ");
    let partOfString = "";
    let newString = "";
    for (let i = 0; i < stringArray.length; i++){
        partOfString = toCapitalizeWord(stringArray[i]);
        newString += partOfString + " ";
    }
    newString = newString.slice(0,-1);
    return newString;
}

function toCapitalizeWord(string){
    let newString = null;
    if(string){
    let firstLetter = string[0];
    firstLetter = firstLetter.toUpperCase();
    string = string.substr(1).toLowerCase();
    newString = firstLetter + string;
    } else{
        newString = ""
    }
    return newString
}

/**
 * This is the Event-Listener for the function capitalizeFirstLetter
*/
function capitalizeFirstLetterInName(){
    let statusValidationName = document.getElementById('ltitlename');
    const words = statusValidationName.value.trim().split(/\s+/);
    if (words.length > 2) {
        statusValidationName.value = words.slice(0, 2).join(' ');
    }
    statusValidationName.value = capitalizeFirstLetter(statusValidationName.value);
}

/** 
*  This function opens the window add contact.
*/
function openAddContact() {
    clearInputFields();
    styleAddContact();
    showAddOrEditContactWindow();
    distanceInputField();
    document.getElementById('add-contact-bg').classList.remove('d-none');
    addListenerForAddContact();
    myStatus = false;
}

/**
 * This function style the add contact window.
 */
function styleAddContact(){
    document.getElementById('text-contact').innerHTML = 'Add contact';
    document.getElementById('text-taskarebetter').classList.remove('d-none');
    document.getElementById('join-logo').style.transform = "translateY(-12.968rem)";
    document.getElementById('initial-person-card').classList.remove('d-none');
    document.getElementById('text-initial').innerHTML = '';
    document.getElementById('color-icon').style.backgroundColor = '';
    document.getElementById('container-editcontact').classList.add('d-none');
    document.getElementById('container-addcontact').classList.remove('d-none');
    if(screen.width < 1000){
        document.getElementById('requiredtext').style.marginTop = "12px";
        document.getElementById('requiredemail').style.marginTop = "12px";
        }
}

/**
 * This function makes the distance of the input field in the desktop version
 */
function distanceInputField(){
    if(screen.width > 1200){
        document.getElementById('required-name').style.margin = "0.5rem 0 0 0.5rem";
        document.getElementById('required-name').style.height = "1.932rem";
        document.getElementById('required-email').style.margin = "0.5rem 0 0 0.5rem";
        document.getElementById('required-email').style.height = "1.932rem";
        document.getElementById('required-phone').style.margin = "0.5rem 0 0 0.5rem";
        document.getElementById('required-phone').style.height = "1.932rem";
    } else {
        document.getElementById('required-name').style.margin = "0.3rem 0 0 0.625rem";
        document.getElementById('required-name').style.height = "1.5rem";
        document.getElementById('required-email').style.margin = "0.3rem 0 0 0.625rem";
        document.getElementById('required-email').style.height = "1.5rem";
        document.getElementById('required-phone').style.margin = "0.3rem 0 0 0.625rem";
        document.getElementById('required-phone').style.height = "1.5rem";
    }
}

/** 
*  This function add all Listeners for the add contact window.
*/
function addListenerForAddContact(){
    let statusValidationName = document.getElementById('ltitlename');
    let eventButton = document.getElementById('button-createcontact');
    let allInputFields = [document.getElementById('ltitlename'), document.getElementById('ltitleemail'), document.getElementById('ltitlephone')];

    allInputFields.forEach(listenerInputfield => {
        listenerInputfield.addEventListener("keyup", checkValidityNameEmailPhone);
    });
    eventButton.addEventListener("mouseover", validityFalseAboveButtonRedBorder);
    eventButton.addEventListener("mouseout", validityFalseLeaveButtonWhiteBorder);
    statusValidationName.addEventListener("input", capitalizeFirstLetterInName);
}

/** 
*  This function remove all Listeners for the add contact window.
*/
function removeListenerForAddContact(){
    let statusValidationName = document.getElementById('ltitlename');
    let eventButton = document.getElementById('button-createcontact');
    let allInputFields = [document.getElementById('ltitlename'), document.getElementById('ltitleemail'), document.getElementById('ltitlephone')];

    document.getElementById('button-createcontact').style.backgroundColor='#2A3647';
    document.getElementById('button-createcontact').disabled = true;
    allInputFields.forEach(listenerInputfield => {
        listenerInputfield.removeEventListener("keyup", checkValidityNameEmailPhone);
    });
    eventButton.removeEventListener("mouseover", validityFalseAboveButtonRedBorder);
    eventButton.removeEventListener("mouseout", validityFalseLeaveButtonWhiteBorder);
    statusValidationName.removeEventListener("input", capitalizeFirstLetterInName);
}

let myStatusEditContact = false;
/** 
*  This function opens the window edit contact.
*/
function openEditContact(i) {
    clearInputFields();
    styleEditContact();
    getSelectedContact(i);
    showAddOrEditContactWindow();
    distanceInputField();
    document.getElementById('add-contact-bg').classList.remove('d-none');
    addListenerForEditContact();
    myStatusEditContact = false;
    statusOverwriting = false;
}

/**
 * This function style the edit contact window.
 */
function styleEditContact(){
    document.getElementById('text-contact').innerHTML = 'Edit contact';
    document.getElementById('text-taskarebetter').classList.add('d-none');
    document.getElementById('join-logo').style.transform = "translateY(-10.968rem)";
    document.getElementById('container-addcontact').classList.add('d-none');
    document.getElementById('container-editcontact').classList.remove('d-none');
    document.getElementById('button-save').style.backgroundColor='#2A3647';
    if(screen.width < 1000){
    document.getElementById('requiredtext').style.marginTop = "0";
    document.getElementById('requiredemail').style.marginTop = "0";
    }
}
/** 
*  This function clears the input fields.
*/
function clearInputFields() {
    document.getElementById('ltitlename').value = '';
    document.getElementById('ltitleemail').value = '';
    document.getElementById('ltitlephone').value = '';
}

/** 
*  Show the add or edit contact window.
*/
function showAddOrEditContactWindow() {
    document.getElementById('add-contact').classList.remove('animationcloseaddcontact');
    document.body.style.overflowY = 'hidden';
}

/** 
*   This function closes the add contact function.
*/
function closeAddContact() {
    document.getElementById('add-contact').classList.add('animationcloseaddcontact');
    setTimeout(closeWindow, 1500);
}

/** 
*  This function closes the window.
*/
function closeWindow() {
    document.getElementById('add-contact-bg').classList.add('d-none');
    document.getElementById('mobile-contact-view').classList.add('d-none');
    document.getElementById('mobile-edit-delete-c').classList.add('d-none');
    document.body.style.overflowY = 'hidden';
}

/** 
*  This function loads available contacts.
*/
function getSelectedContact(i) {
    document.getElementById('ltitlename').value = `${sortedContactsByName[i]["name"]}`;
    document.getElementById('ltitleemail').value = `${sortedContactsByName[i]["email"]}`;
    document.getElementById('ltitlephone').value = `${sortedContactsByName[i]["phone"]}`;
    document.getElementById('initial-person-card').classList.add('d-none');
    document.getElementById('text-initial').innerHTML = `${sortedContactsByName[i]["initials"]}`;
    document.getElementById('color-icon').style.backgroundColor = `${sortedContactsByName[i]["color"]}`;
    lastIndex = 2000;
}

/** 
*  This function creates a new contact.
*/
async function createContactOnContactPage() {
    let name = document.getElementById('ltitlename').value;
    let email = document.getElementById('ltitleemail').value;
    let phone = document.getElementById('ltitlephone').value;

    await createContact(name, email, phone);
    removeListenerForAddContact();
    deletedContactList();
    renderContactList();
    document.getElementById('text-successfulcreated').innerHTML = 'Contact successfully created';
    closeAddContactWithAnimation();
}

/** 
*  This function saves the edit contact.
*/
let statusOverwriting = false;
function saveEditContact(i) {
    let name = document.getElementById('ltitlename').value;
    let existedName = `${sortedContactsByName[i]["name"]}`;
    let email = document.getElementById('ltitleemail').value;
    let existedEmail = `${sortedContactsByName[i]["email"]}`;
    let phone = document.getElementById('ltitlephone').value;
    let existedPhone = `${sortedContactsByName[i]["phone"]}`;

    if(!name.localeCompare(existedName) && !email.localeCompare(existedEmail) && !phone.localeCompare(existedPhone)) {
        closeAddContactWithAnimation();
    } else {
        saveSelectedContact(name, email, phone,i);
    }
}

/**
 * In this function are all under function for save the edit contact.
 */
function saveSelectedContact(name, email, phone,i){
    if(!statusOverwriting){
        overwritingAvaibleContact(name, email, phone);
        statusOverwriting = true;
    }
    removeListenerForEditContact();
    document.getElementById('text-successfulcreated').innerHTML = 'Contact successfully edited';
    openContact(i);
    renderContactContainer(i);
    deletedContactList();
    renderContactList();
    closeAddContactWithAnimation();
}

/**
 * This function save the selected edit contact of the contact page.
 */
async function overwritingAvaibleContact(name, email, phone){
    contacts[editIndex]['name'] = name;
    contacts[editIndex]['email'] = email;
    contacts[editIndex]['phone'] = phone; 
    contacts[editIndex]['initials'] = getInitials(name),
    await storeContacts();
}

/** 
*  This function closes the add or edit contact with a slide effect.
*/
function closeAddContactWithAnimation() {
    closeAddContact();
    setTimeout(successfulSent, 1500);
    setTimeout(closeSuccessfulSent, 2300);
}

/** 
*  This function closes the window successfully.
*/
function sucessfulCreatedDisable() {
    document.getElementById('text-successfulcreated').classList.add('d-none');
}