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
});
