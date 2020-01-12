var db = require("../models");

module.exports = function(app) {
  app.get("/api/partType/", function(req, res) {
    db.Part.aggregate({}).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  // app.get("/api/vendor/", function(req, res) {
  //   db.Vendor.findAll({}).then(function(DBVendor) {
  //     res.json(DBVendor);
  //   });
  // });

  app.get("/api/users", function(req, res) {
    const username = req.query.username;
    const password = req.query.password;

    db.User.findAll({
      where: {
        username,
        password
      }
    }).then(function(dbUser) {
      // res.json(dbUser);
      if (dbUser !== null) {
        res.redirect("/users/index");
      } else {
        // you'd maybe like to set response status to 404
        console.log("Error: user not found");
      }
    });
  });

  app.get("/api/parts", function(req, res) {
    db.Parts.findAll({}).then(function(DBPart) {
      res.json(DBPart);
    });
  });
  app.get("/api/parts/:id", function(req, res) {
    db.Parts.findOne({ where: { id: req.params.id } }).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  app.get("/api/parts/:type", function(req, res) {
    db.Parts.findAll({ where: { type: req.params.id } }).then(function(DBPart) {
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

  // app.post("/api/vendor", function(req, res) {
  //   db.Vendor.create(req.body).then(function(DBVendor) {
  //     res.json(DBVendor);
  //   });
  // });

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

  app.delete("/api/parts/:id", function(req, res) {
    db.Part.destroy({ where: { id: req.params.id } }).then(function(DBPart) {
      res.json(DBPart);
    });
  });

  app.put("/api/parts", function(req, res) {
    db.Part.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(DBPart) {
      res.json(DBPart);
    });
  });
};
