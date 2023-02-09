// const db = require('../config/db');
// const Sequelize = require('sequelize');

// const books = db.define('books', {
//   book_id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   book_name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   author: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   price: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   category: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
// });

// module.exports = books;

'use strict';
const {
  Model, literal
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.hasMany(models.loaninfo, {
        foreignKey: 'book_id'
      });
    }
  }
  books.init({
    book_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    book_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author:{
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'books',
  });

  return books;
};