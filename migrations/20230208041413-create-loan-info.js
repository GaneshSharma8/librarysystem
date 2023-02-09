'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loanInfos', {
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      loaned_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      return_by: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      returned_on: { 
        type: Sequelize.DATE 
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loanInfos');
  }
};