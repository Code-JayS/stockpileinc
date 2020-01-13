$(document).ready(function() {
  // Our new parts will go inside the partContainer
  var $partContainer = $("#parts-container");
  // Adding event listeners for deleting, editing, and adding parts
  // $(document).on("click", "button.complete", toggleComplete);
  // $(document).on("click", ".part-item", editpart);

  // Our initial parts array
  var parts = [];

  // Getting parts from database when page loads
  getparts();

  // This function resets the parts displayed with new parts from the database
  function initializeRows() {
    $partContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < parts.length; i++) {
      rowsToAdd.push(createNewRow(parts[i]));
    }
    $partContainer.prepend(rowsToAdd);
  }

  // This function grabs parts from the database and updates the view
  function getparts() {
    $.get("/api/parts", function(data) {
      parts = data;
      console.log(data);
      initializeRows();
    });
  }

  // // This function handles showing the input box for a user to edit a part
  // function editpart() {
  //   var currentpart = $(this).data("part");
  //   $(this)
  //     .children()
  //     .hide();
  //   $(this)
  //     .children("input.edit")
  //     .val(currentpart.text);
  //   $(this)
  //     .children("input.edit")
  //     .show();
  //   $(this)
  //     .children("input.edit")
  //     .focus();
  // }

  // // Toggles complete status
  // function toggleComplete(event) {
  //   event.stopPropagation();
  //   var part = $(this)
  //     .parent()
  //     .data("part");
  //   part.complete = !part.complete;
  //   updatepart(part);
  // }

  // This function starts updating a part in the database if a user hits the "Enter Key"
  // While in edit mode
  // function finishEdit(event) {
  //   var updatedpart = $(this).data("part");
  //   if (event.which === 13) {
  //     updatedpart.text = $(this)
  //       .children("input")
  //       .val()
  //       .trim();
  //     $(this).blur();
  //     updatepart(updatedpart);
  //   }
  // }

  // This function updates a part in our database
  // function updatepart(part) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/parts",
  //     data: part
  //   }).then(getparts);
  // }

  // This function is called whenever a part item is in edit mode and loses focus
  // // This cancels any edits being made
  // function cancelEdit() {
  //   var currentpart = $(this).data("part");
  //   if (currentpart) {
  //     $(this)
  //       .children()
  //       .hide();
  //     $(this)
  //       .children("input.edit")
  //       .val(currentpart.text);
  //     $(this)
  //       .children("span")
  //       .show();
  //     $(this)
  //       .children("button")
  //       .show();
  //   }
  // }

  // This function constructs a part-item row
  function createNewRow(parts) {
    var $newInputRow = $(
      [
        "<li class='list-group-item part-item'>",
        "<span>",
        parts.name,
        "  ",
        parts.type,
        "   ",
        parts.price,
        "   ",
        "<img src='./images/"+parts.picture+".jpg' class='img-fluid' id="+parts.name+" alt="+parts.name+"></img>",
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );
    $newInputRow.find("button.delete").data("id", parts.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("parts", parts);
    if (parts.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }
});
