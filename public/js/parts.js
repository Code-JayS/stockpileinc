$(document).ready(() => {
  $(document).on("submit", ".formNewPart", handleNewPart);

  function handleNewPart(event) {
    event.preventDefault();

    var newPart = {
      name: $("#inputPart")
        .val()
        .trim(),
      vendorName: $("#inputVendor")
        .val()
        .trim(),
      type: $("#inputType")
        .val()
        .trim(),
      price: $("#inputPrice")
        .val()
        .trim(),
      stock: $("#inputStock")
        .val()
        .trim(),
      description: $("#inputDescription")
        .val()
        .trim(),
      picture: $("#inputPicture")
        .val()
        .trim()
    };
    console.log(newPart);

    $.post("/api/newPart", newPart).then(function() {
      console.log("success!");
    });
  }
});
