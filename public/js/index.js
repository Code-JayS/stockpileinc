var api = {
  partsList: function() {
    return $.ajax({
      url: "api/parts",
      type: "GET"
    });
  }
};

api.partsList().then(function(data) {
  console.log(data);
  // var $a = $("<a>")
  //   .text(parts.type)
  //   .attr("href", "/example/" + parts.id);

  // var $li = $("<li>")
  //   .attr({
  //     class: "list-group-item",
  //     "data-id": example.id
  //   })
  //   .append($a);

  // return $li;
});

//   $exampleList.empty();
//   $exampleList.append($parts);
// });
