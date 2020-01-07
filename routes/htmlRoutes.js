var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Parts.findAll({}).then(function(dbParts) {
      res.render("index", {
        type: dbParts
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/login", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/register", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("register", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/parts", function(req, res) {
    db.Parts.findAll({}).then(function(dbExamples) {
      res.render("parts", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
