$(document).ready(() => {
  $(document).on("submit", ".form-signin", handleUserFormSubmit);

  function handleUserFormSubmit(event) {
    event.preventDefault();

    var newUser = {
      userNameInput: $("#inputUserName")
        .val()
        .trim(),
      firstName: $("#inputFirstName")
        .val()
        .trim(),
      lastName: $("#inputLastName")
        .val()
        .trim(),
      email: $("#inputEmail")
        .val()
        .trim(),
      password: $("#inputPassword")
        .val()
        .trim()
    };
    console.log(newUser);

    $.post("/api/new", newUser).then(function() {
      console.log("Success!!!");
      res.end();
    });
  }
});
