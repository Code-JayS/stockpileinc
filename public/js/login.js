$("#login").on("click", function(event) {
  event.preventDefault();
  let userName = $("#userName")
    .val()
    .trim();
  let userPass = $("#inputPassword")
    .val()
    .trim();

  verify(userName, userPass);
});

function verify(userName, userPass) {
  const path = `/api/user/find/${userName}/${userPass}`;
  $.get(path).then(result => {
    if (result) {
      console.log("success")
    } else {
      const userNamePassErr = (`<div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Login Error</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Your User Name or password is Incorrect.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`)
      $("#message").append(userNamePassErr);
      console.log("not logged in");
    }
  });
}
