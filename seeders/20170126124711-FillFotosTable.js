'use strict';

var photos_url = process.env.PHOTOS_URL || "http://localhost:8000"

module.exports = {
  up: function (queryInterface, Sequelize) {
 	return queryInterface.bulkInsert('Fotos', [ 
         { name: 'Wood',
	   url: photos_url + '/photos/photo1.jpg',
	   UserId: 1,
	   AlbumId: 1,
	   likes: 33,
           createdAt: new Date(), updatedAt: new Date() },
	 { name: 'Desktop',
	   url: photos_url + '/photos/photo2.jpg',
	   UserId: 1,
	   AlbumId: 2,
	   likes: 39,
           createdAt: new Date(), updatedAt: new Date() },
	 { name: 'Man',
	   url: photos_url + '/photos/photo3.jpg',
	   UserId: 2,
	   AlbumId: 3,
	   likes: 98,
           createdAt: new Date(), updatedAt: new Date() },
	 { name: 'Woman',
	   url: photos_url + '/photos/photo4.jpg',
	   UserId: 2,
	   AlbumId: 3,
	   likes: 2,
           createdAt: new Date(), updatedAt: new Date() },
	 { name: 'People',
	   url: photos_url + '/photos/photo5.jpg',
	   UserId: 3,
	   AlbumId: 4,
	   likes: 0,
           createdAt: new Date(), updatedAt: new Date() },
        ]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Fotos', null, {});
  }
};
