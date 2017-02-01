'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.createTable('Comments',       
	{id: { type: Sequelize.INTEGER,
                      allowNull: false,
                      primaryKey: true,
                      autoIncrement: true,
                      unique: true },
	 text: {type: Sequelize.STRING},
	 FotoId:{ type: Sequelize.INTEGER},
	 UserId:{ type: Sequelize.INTEGER},
	 createdAt:	{type: Sequelize.DATE, allowNull: false},
	 updatedAt:	{type: Sequelize.DATE, allowNull: false},
	},
	{ sync: {force: true}
	});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Comments');
  }
};
