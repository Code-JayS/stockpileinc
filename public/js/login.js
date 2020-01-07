$("#login").on("click", function(event) {
  event.preventDefault();
  let user = $("#userName")
    .val()
    .trim();
  let pass = $("#inputPassword")
    .val()
    .trim();

  verify(user, pass);
});

const verify = (user, pass) =>
  db.User.count({ 
    where: { 
      userName: user, 
      userPass: pass} 
  })
  .then(count => {
    return (count > 0) ? true : false;
    
  });



  
      console.log("success");
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
