const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    date_picker: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        isDate: {
          args: true,
          msg: "Must be a valid date"
        }
      }
    },
    contributor: {
      type: DataTypes.STRING,
      allowNull: true,
      attributes: {
        Name: DataTypes.TEXT,
        Role: DataTypes.STRING,
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;


module.exports = Project;