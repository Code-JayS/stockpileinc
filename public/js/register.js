$(document).ready(() => {
  $(document).on("submit", ".form-signin", handleUserFormSubmit);

  function handleUserFormSubmit(event) {
    event.preventDefault();

    var newUser = {
      userName: $("#inputUserName")
        .val()
        .trim(),
      userFirst: $("#inputFirstName")
        .val()
        .trim(),
      userLast: $("#inputLastName")
        .val()
        .trim(),
      userEmail: $("#inputEmail")
        .val()
        .trim(),
      userRole: $("#inputRole")
        .val()
        .trim(),
      userPass: $("#inputPassword")
        .val()
        .trim()
    };
    console.log(newUser);

    $.post("/api/new", newUser).then(function() {
      console.log("Success!!!");
    });
  }
});
