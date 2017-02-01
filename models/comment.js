module.exports = function(sequelize, DataTypes) {
   return sequelize.define('Comments',
	{text: {type:DataTypes.STRING},
	 FotoId:{ type: DataTypes.INTEGER},
	 UserId:{ type: DataTypes.INTEGER}
	});
};