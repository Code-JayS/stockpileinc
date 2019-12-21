// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };
var db = require("../models");
module.exports = function(app) {
  app.get("/api/part/", function(req, res) {
    db.Part.findAll({}).then(function(DBPart) {
      res.json(DBPart);
    });
  });
  app.post("/api/part", function(req, res) {
    db.Part.create(req.body).then(function(DBPart) {
      res.json(DBPart);
    });
  });
  app.delete("/api/part/:id", function(req, res) {
    db.Part.destroy({ where: { id: req.params.id } }).then(function(DBPart) {
      res.json(DBPart);
    });
  });
  app.put("/api/part", function(req, res) {
    db.Part.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(DBPart) {
      res.json(DBPart);
    });
  });
};
