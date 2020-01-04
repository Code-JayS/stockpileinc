$(document).ready(() => {
  // Getting references to the name input and user container, as well as the table body
  var userNameInput = $("#inputUsername");
  var firstName = $("#inputFirstName");
  var lastName = $("#inputLastName");
  var email = $("#inputEmail");
  var password = $("#inputPassword");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", ".form-signin", handleUserFormSubmit);
  // Getting the initial list of users
  getusers();

  // A function to handle what happens when the form is submitted to create a new user
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the form fields hasn't been filled out
    if (
      !userNameInput
        .val()
        .trim()
        .trim() ||
      !firstName
        .val()
        .trim()
        .trim() ||
      !lastName
        .val()
        .trim()
        .trim() ||
      !email
        .val()
        .trim()
        .trim() ||
      !password
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    // Calling the upsertuser function and passing in the value of the name input
    upsertUser({
      userName: userNameInput.val().trim(),
      userFirst: firstName.val().trim(),
      userLast: lastName.val().trim(),
      userEmail: email.val().trim(),
      userRole: role.val().trim(),
      userPass: password.val().trim()
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function upsertUser(userData) {
    $.post("/api/user", userData).then(getusers);
  }

  // Function for retrieving user and validating

  //this nneds to written correctly
  function getusers() {
    $.get("/api/user", function(userdata) {
      if (userdata === true) {
        renderuserAuth();
      } else {
        renderFail();
      }
    });
  }

  // Function for handling what to render when user does not exist
  function renderFail() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an user before you can use stockpile.");
    userContainer.append(alertDiv);
  }
});
