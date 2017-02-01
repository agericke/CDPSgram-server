module.exports = function(sequelize, DataTypes) {
   return sequelize.define('Albums',
	{name: { type: DataTypes.STRING},
	 isPrivate:{ type: DataTypes.BOOLEAN, defaultValue: false},
	 UserId:{ type: DataTypes.INTEGER}
	});
};
