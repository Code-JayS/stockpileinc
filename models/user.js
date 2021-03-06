module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      userName: {
        type: DataTypes.STRING,
        allowNul: false,
        validate: {
          len: [1]
        }
      },
      userFirst: {
        type: DataTypes.STRING,
        allowNul: false,
        validate: {
          len: [1]
        }
      },
      userLast: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userRole: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userPass: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );
  return User;
};
