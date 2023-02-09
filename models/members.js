'use strict';
const {
  Model, Sequelize, literal
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  members.init({
    member_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    member_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contact_no: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'members',
  });

  members.associate = function(models){
    members.hasMany(models.loaninfo, {
      foreignKey: 'member_id'
    });
  }

  return members;
};