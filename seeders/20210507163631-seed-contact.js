'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',[
      {
        firstname: 'Jefersson',
        lastname: 'Bustamante',
        phone: '1234567890',
        email: 'jeferb93@gmail.com', 
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: 'User',
        lastname: 'Test',
        phone: '1234567890',
        email: 'test@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
