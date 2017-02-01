'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.createTable('Albums',
	{ id:	{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
	  name: { type: Sequelize.STRING},
	  isPrivate:{ type: Sequelize.BOOLEAN, defaultValue: false},
	  UserId:{ type: Sequelize.INTEGER},
	  createdAt:	{type: Sequelize.DATE, allowNull: false},
	  updatedAt:	{type: Sequelize.DATE, allowNull: false},
	},
	{ sync: {force: true}
	}
    );	
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Albums');
  }
};
