/**
 * This function gets executed on load to start the script.
 */
async function initSignUp() {
  
}

/**
 * This function gets the values of the inputs.
 */
function newUser() {
  let username = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm').value;
  unsuccessfulTextAway();
  unsuccessfulTextRemove()
  passwordConfirm(email, username, password, confirm);
}

/**
 * This function confirms that the 1. & 2. password are equal. If so it leads to user creation, if not it leads to functions idicating the error.
 * 
 * @param {string} email - The email of the new user.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} confirm - The password confirmation of the new user.
 */
async function passwordConfirm(email, username, password, confirm) {
  if (password == confirm) {
    await checkUsers(email, password, username);
  } else {
    wrongPasswordText();
    addBorderColorRed();
  };
}

/**
 * This function checks if the Email  already exists in the database and gives the user feedback based on that information.
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {string} username 
 */
async function checkUsers(email, password, username) {
  if(!await checkForValidEmail(email)){
    unsuccessfulText();
    setTimeout(unsuccessfulTextDown, 3500);
  } else{
    await createUser(email, password, username);
    setTimeout(forwardToLoginSide, 2500);
    successfulText();
  }
}

  /**
   * This function gets the user to the login side. A Timeout start thsi function after 2,5 seconds.
   * 
   */
  function forwardToLoginSide() {
    window.location.href = 'start.html';
  }

  /**
   * This function show a message, that indicates the successful signin. 
   */
  function successfulText() {
    document.getElementById('popup').classList.remove('d-none');
  }

  function unsuccessfulText() {
    document.getElementById('popup-fail').classList.remove('d-none');
  }

  function unsuccessfulTextAway() {
    document.getElementById('popup-fail').classList.add('d-none');
  }

  function unsuccessfulTextRemove() {
    document.getElementById('popup-fail').classList.remove('popup-fail');
  }

  function unsuccessfulTextDown() {
    document.getElementById('popup-fail').classList.add('popup-fail');
  }

  /**
   * This function gets the element by id and adds a class to color the border red.
   */
  function addBorderColorRed() {
    document.getElementById('input-field2').classList.add('border-red');
  }

  /**
   * This function gets the element by id and adds a class to show the wrong password text. 
   */
  function wrongPasswordText() {
    document.getElementById('wrong-password').classList.remove('d-none');
  }

  /**
   * This function changes the custom icon of the checkbox based on clicking.
   */
  function switchCheckbox() {
    let check = document.getElementById('checkbox');
    if (check.src.includes('checkbox-default.svg')) {
      check.src = '../img/icons/checkbox-checked.svg';
    } else {
      check.src = '../img/icons/checkbox-default.svg';
    }
  }

  /**
   * This function changes the type of the password input form password to text. Thus the user can see the typed password.
   *  
   */
  function changeInputType1() {
    let icon = document.getElementById('password-icon1');
    if (icon.src.includes('visibility_off.svg')) {
      icon.src = '../img/icons/visibility_on.svg';
      let password = document.getElementById('password').type = 'text';
      addBorderColorBlue(password);
    } else {
      icon.src = '../img/icons/visibility_off.svg';
      document.getElementById('password').type = 'password';
      removeBorderColorBlue(password);
    }
  }

  /**
   * This function changes the type of the password input form password to text. Thus the user can see the typed password.
   *  
   */
  function changeInputType2() {
    let icon = document.getElementById('password-icon2');
    if (icon.src.includes('visibility_off.svg')) {
      icon.src = '../img/icons/visibility_on.svg';
      let confirm = document.getElementById('confirm').type = 'text';
      addBorderColorBlue(confirm);
    } else {
      icon.src = '../img/icons/visibility_off.svg';
      document.getElementById('confirm').type = 'password';
      removeBorderColorBlue(confirm);
    }
  }

  /**
   * This function adds a blue border to the input fields of password or confirm password
   * 
   * @param {string} password 
   * @param {string} confirm 
   */
  function addBorderColorBlue(password, confirm) {
    password = document.getElementById('input-field1').classList.add('border-blue');
    confirm = document.getElementById('input-field2').classList.add('border-blue');
  }

  /**
   * This function adds a blue border to the input fields of password or confirm password
   * 
   * @param {string} password 
   * @param {string} confirm 
   */
  function removeBorderColorBlue(password, confirm) {
    password = document.getElementById('input-field1').classList.remove('border-blue');
    confirm = document.getElementById('input-field2').classList.remove('border-blue');
  }

  /**
   * This function changes the icon of the password input when the user starts typing.
   * 
   */
  function changeIconToVisibilityOff1() {
    document.getElementById('password-icon1').src = '../img/icons/visibility_off.svg';
  }

  /**
   * This function changes the icon of the confirm input when the user starts typing.
   * 
   */
  function changeIconToVisibilityOff2() {
    document.getElementById('password-icon2').src = '../img/icons/visibility_off.svg';
  }
