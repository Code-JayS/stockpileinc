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
  app.get("/api/employee/find/:userName/:userPass", (req, res) => {
    db.User.findOne({
      where: {
        userName: req.params.userName,
        userPass: req.params.userPass
      }
    }).then(data => {
      res.json(data);
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

  app.post("/api/newPart", function(req, res) {
    db.Parts.create({
      name: req.body.name,
      vendorName: req.body.vendorName,
      type: req.body.type,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
      picture: req.body.picture
    }).then(function(DbPart) {
      res.json(DbPart);
    });
  });

  app.post("/api/vendor", function(req, res) {
    db.Vendor.create(req.body).then(function(DBVendor) {
      res.json(DBVendor);
    });
  });

  app.post("/api/new", function(req, res) {
    db.User.create({
      userName: req.body.userName,
      userFirst: req.body.userFirst,
      userLast: req.body.userLast,
      userEmail: req.body.userEmail,
      userRole: req.body.userRole,
      userPass: req.body.userPass
      // createdAt: Sequelize.DATE,
      // updatedAt: Sequelize.DATE
    }).then(function(DbUser) {
      res.json(DbUser);
      console.log(DbUser);
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
