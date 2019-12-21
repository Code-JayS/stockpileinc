module.exports = function (sequelize, DataTypes) {
  var Installed = sequelize.define(
    "Installed",
    {
      installedLocation: {
        type: DataTypes.STRING,
        allowNul: false,
        validate: {
          len: [1]
        }
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );
  return Installed;
};
