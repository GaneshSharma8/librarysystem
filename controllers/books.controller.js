const { Sequelize } = require('sequelize');
const db = require('../config/db');
const sequelize = require('sequelize');

const Book = require('../models/books')(db, Sequelize);
const { validationResult } = require('express-validator');

function isError(req){
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return {
      result: true,
      errors: errors
    }
  } else {
    return {result: false}
  }
}

module.exports = {
    async addBook(req,res,next){
      try{
        const errors = validationResult(req);

        if(isError(req).result){
          return res.json(isError(req).errors);
        }
        
        const book = req.body;
        await Book.create(book);
        res.send(book);
      } catch(error) {
          console.log(error);
      }
    },

    async getAllBooks(req,res, next){
    const result = await Book.findAll();
    res.send(result);
  }
}