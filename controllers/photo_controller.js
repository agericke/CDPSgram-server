var fs = require('fs');
var models = require('../models');

exports.load = function(req, res, next, photoId){
   models.Foto.findById(photoId).then(function(photo){
	if(photo){
	   req.photo=photo;
	   next();
	}else{
	   req.flash('error', 'No existe la foto con id= '+id+'.');
	   throw new Error('No existe fotoId= '+ photoId);
	}
   }).catch(function(error) {next(error);});
};

exports.loadAlbum = function(req, res, next, albumId){
   models.Album.findById(albumId).then(function(album){
	if(album){
	   req.album = album;
	   next();
	}else{
	   req.flash('error', 'No existe el usuario con id= '+id+'.');
	   throw new Error('No existe userId= '+ albumId);
	}
   }).catch(function(error) {next(error);});
};

exports.list = function (req, res) {
	var userId = (req.session.user && req.session.user.id || 0);
	models.Foto.findAll({where:{UserId: userId}}).then(function(item){
		res.render('photos/index', {photos: item});
	});
};

// Devuelve la vista del formulario para subir una nueva foto
exports.new = function (req, res) {
	res.render('photos/new', {album: req.album});
};

// Devuelve la vista de visualización de una foto.
// El campo photo.url contiene la url donde se encuentra el fichero de audio
exports.show = function (req, res) {
	models.Comment.findAll({where:{FotoId: req.photo.id}, include: [models.User]}).then(function(item){
		res.render('photos/show', {photo: req.photo, comments: item});
	});	
};

// Escribe una nueva foto en el registro de imagenes.
exports.create = function (req, res) {
	var userId = (req.session.user && req.session.user.id || 0);
	var photo = {name: req.body.name, url: req.body.url, UserId: userId, AlbumId: req.album.id, likes: 0};
	models.Foto.create(photo).then(function(item){
	   res.redirect('/albums/'+ req.album.id);
	});

};

exports.showAlbums = function(req, res) {
	var userId = (req.session.user && req.session.user.id || 0);
	models.Album.findAll({where:{UserId: userId}}).then(function(item){
		res.render('photos/showAlbums', {albums: item});
	});
};

exports.showAlbum = function(req, res) {
	var userId = (req.user && req.user.id) || (req.session.user && req.session.user.id || 0);
	models.Foto.findAll({where:{UserId: userId, AlbumId: req.album.id}}).then(function(item){
		res.render('photos/showAlbum', {album: req.album, photos: item, user: req.user});
	});
};

exports.newAlbum = function(req, res) {
	res.render('photos/newAlbum');
};

exports.createAlbum = function(req, res) {
	var userId = (req.session.user && req.session.user.id || 0);
	var album = {name: req.body.name, isPrivate: req.body.isPrivate, UserId: userId};
	models.Album.create(album).then(function(item){
	   res.redirect('/albums');
	});
};

exports.deleteAlbum = function(req, res) {
	models.Album.destroy({where: {id: req.album.id}}).then(function(item){
		models.Foto.destroy({where:{AlbumId: req.album.id}}).then(function(o){
			res.redirect('/albums');
		});
	});
};

// Borra una foto (photoId) del registro de imagenes 
exports.destroy = function (req, res) {
	models.Foto.destroy({where:{id: req.photo.id}}).then(function(o){
		res.redirect('/photos');
	});
};

exports.like = function(req, res){
	var likes = req.photo.likes + 1;
	models.Foto.update({likes: likes}, {where:{id: req.photo.id}}).then(function(item){
		res.redirect('/photos/' + req.photo.id);
	});
};

exports.newComment = function(req, res){
	var userId = (req.session.user && req.session.user.id || 0);
	var comment = {text: req.body.comment.text, FotoId: req.photo.id, UserId: userId};
	models.Comment.create(comment).then(function(item){
		res.redirect('/photos/' + req.photo.id);
	});
};