module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define(
    "Vendor",
    {
      companyName: {
        type: DataTypes.STRING,
        allowNul: false,
        validate: {
          len: [1]
        }
      },
      address1: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      address2: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      address3: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      zip: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      vendorImage: {
        type: DataTypes.TEXT,
        default: "placeHolder.jpg"
      }
    },
    {
      freezeTableName: true
    }
  );
  return Vendor;
};
// todo: add associate
