const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Backing extends Model {}

Backing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    backing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'project',
            key: 'id'
        }
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //       model: 'user',
    //       key: 'id'
    //   }
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'backing',
  }
);

module.exports = Backing;
