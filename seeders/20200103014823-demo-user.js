"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Trenton",
          lastName: "Gharst",
          email: "deeznuts@stockpileinc.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Harris",
          lastName: "Lane",
          email: "bama@stockpileinc.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Robert",
          lastName: "Davidson Jr.",
          email: "rjdj@stockpileinc.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Jay",
          lastName: "Smith",
          email: "smokinjay@stockpileinc.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Trenton",
          lastName: "Gharst",
          email: "deeznuts@stockpileinc.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
