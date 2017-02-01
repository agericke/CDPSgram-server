'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Albums', [
	{ name: "My First Album",
          isPrivate: false,
	  UserId: 1,
	  createdAt: new Date(), updatedAt: new Date()
        },
	{ name: "My Second Album",
          isPrivate: false,
	  UserId: 1,
	  createdAt: new Date(), updatedAt: new Date()
        },
	{ name: "My First Album",
          isPrivate: false,
	  UserId: 2,
	  createdAt: new Date(), updatedAt: new Date()
        },
	{ name: "My First Album",
          isPrivate: false,
	  UserId: 3,
	  createdAt: new Date(), updatedAt: new Date()
        }
	]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
