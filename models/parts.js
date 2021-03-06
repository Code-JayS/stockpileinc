module.exports = function(sequelize, DataTypes) {
  var Parts = sequelize.define(
    "Parts",
    {
      name: {
        type: DataTypes.STRING,
        allowNul: false,
        validate: {
          len: [1]
        }
      },
      // mfgNum: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      //   validate: {
      //     len: [1]
      //   }
      //},
      // mfgName: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      //   validate: {
      //     len: [1]
      //   }
      // },
      vendorName: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      stock: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      // max: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      //   validate: {
      //     len: [1]
      //   }
      // },
      // min: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      //   validate: {
      //     len: [1]
      //   }
      // },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      picture: {
        type: DataTypes.TEXT,
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
  return Parts;
};
