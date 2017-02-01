'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Comments', [
	{
         text: "Qué chula esta foto",
	 FotoId: 1,
	 UserId: 2,
	 createdAt:	new Date(),
	 updatedAt:	new Date()
        },
	{
         text: "Como mola!",
	 FotoId: 4,
	 UserId: 3,
	 createdAt:	new Date(),
	 updatedAt:	new Date()
        }
	], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
