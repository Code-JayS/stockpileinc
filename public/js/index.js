var API = {
  partsList: function() {
    return $.ajax({
      url: "api/parts",
      type: "GET"
    });
  }
};

API.partsList().then(function(data) {
  var $parts = data.map(function(parts) {
    console.log(parts);
    var $a = $("<a>")
      .text(parts.type)
      .attr("href", "/example/" + parts.id);

    var $li = $("<li>")
      .attr({
        class: "list-group-item",
        "data-id": example.id
      })
      .append($a);

    return $li;
  });

  $exampleList.empty();
  $exampleList.append($parts);
});
