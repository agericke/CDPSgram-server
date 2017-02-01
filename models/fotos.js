module.exports = function(sequelize, DataTypes) {
   return sequelize.define('Fotos',
	{name: {type: DataTypes.STRING},
	 url: {type: DataTypes.STRING},
	 UserId:{ type: DataTypes.INTEGER},
	 AlbumId:{ type: DataTypes.INTEGER},
	 likes:{ type: DataTypes.INTEGER}
	});
};