$("#login-button").on("click", function() {
  const userName = $("#userName")
    .val()
    .trim();
  const password = $("#inputPassword")
    .val()
    .trim();

  const getStuff = () => {
    $.get("/api/users", function(userName, password) {
      console.log(userName, password);
    });
  };
  getStuff(userName, password);
});
