const { Sequelize } = require('../config/db');
const db = require('../config/db');
const Member = require('../models/members')(db, Sequelize);
const Books = require('../models/books')(db, Sequelize);
const { validationResult } = require('express-validator');


module.exports = {
  async addMember(req,res){
    try{
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
      const member = req.body;
      await Member.create(member);
      res.send(member);

    } catch(error){
        console.log(error);
    }
  },

  async getAllMembers(req,res, next){
    const result = await Member.findAll();
    res.send(result);
  },

}