var db = require("../models");

module.exports = function(app) {
  app.get("/api/part/", function(req, res) {
    db.Part.findAll({}).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  app.get("/api/vendor/", function(req, res) {
    db.Vendor.findAll({}).then(function(DBVendor) {
      res.json(DBVendor);
    });
  });

  app.get("/api/user/", function(req, res) {
    db.User.findAll({}).then(function(DBUser) {
      res.json(DBUser);
    });
  });

  app.get("/api/part/:id", function(req, res) {
    db.Part.findOne({ where: { id: req.params.id } }).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  app.post("/api/part", function(req, res) {
    db.Part.create({
      name: req.body.name,
      vendorNum: req.body.vendorNum,
      type: req.body.type,
      price: req.body.price,
      description: req.body.description
    }).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  app.post("/api/vendor", function(req, res) {
    db.Vendor.create(req.body).then(function(DBVendor) {
      res.json(DBVendor);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create({
      userFirst: req.body.userFirst,
      userLast: req.body.userLast,
      userEmail: req.body.userEmail,
      userRole: req.body.userRole
    }).then(function(DBUser) {
      res.json(DBUser);
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

  app.put("/api/vendor", function(req, res) {
    db.Vendor.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(DBVendor) {
      res.json(DBVendor);
    });
  });
};
