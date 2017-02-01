'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Fotos',
	{ id:	{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
	  name: {type: Sequelize.STRING},
	  url: {type: Sequelize.STRING},
	  UserId:{ type: Sequelize.INTEGER},
	  AlbumId:{ type: Sequelize.INTEGER},
	  likes:{ type: Sequelize.INTEGER},
	  createdAt:	{type: Sequelize.DATE, allowNull: false},
	  updatedAt:	{type: Sequelize.DATE, allowNull: false},
	},
	{ sync: {force: true}
	}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Fotos');
  }
};
