'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class loanInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loanInfo.init({
    memberId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    bookId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    loanedOn: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    returnBy: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    returnedOn: { 
      type: Sequelize.DATE 
    }
  }, {
    sequelize,
    modelName: 'loanInfo',
  });

  loanInfo.associate = function(models){
    loanInfo.belongsTo(models.books, {foreignKey: 'book_id'});
    loanInfo.belongsTo(models.members, {foreignKey: 'member_id'});
  }

  return loanInfo;
};