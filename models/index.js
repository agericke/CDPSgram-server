var path = require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

var url = "sqlite:///";
var storage = "quiz.sqlite";

var sequelize = new Sequelize(url, {storage: storage, omitNull: true});

//Importar la definición de la tabla Quiz de quiz.js
var Foto = sequelize.import(path.join(__dirname, 'fotos'));

//Importar la definicion de la tabla Comments de comment.js
var Comment = sequelize.import(path.join(__dirname,'comment'));

//Importar la definicion de la tabla Users de user.js
var User = sequelize.import(path.join(__dirname,'user'));

//Importar la definicion de la tabla Attachments de attachment.js
var Album = sequelize.import(path.join(__dirname,'album'));

//Relaciones entre modelos
Comment.belongsTo(Foto);
Foto.hasMany(Comment);

User.hasMany(Foto);
Foto.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Foto.belongsTo(Album);
Album.hasMany(Foto);

Album.belongsTo(User);
User.hasMany(Album);

exports.Foto = Foto;  // exportar definición de tabla Quiz
exports.Comment = Comment;  //exportar definición de tabla Comments
exports.User = User;
exports.Album = Album;
