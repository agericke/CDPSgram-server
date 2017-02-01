var express = require('express');
var router = express.Router();
var multer  = require('multer');

var photos_dir = process.env.PHOTOS_DIR || './media/';

var photoController = require('../controllers/photo_controller');
var userController = require('../controllers/user_controller');
var sessionController = require('../controllers/session_controller');

router.param('userId', userController.load); //autoload :userId
router.param('photoId', photoController.load);
router.param('albumId', photoController.loadAlbum);

//Definición de rutas de sesion
router.get('/session', sessionController.new);
router.post('/session', sessionController.create);
router.delete('/session', sessionController.destroy);

//Definición de rutas de cuenta
router.get('/users', userController.index);
router.get('/users/:userId(\\d+)', userController.show);
router.get('/users/:userId(\\d+)/:albumId(\\d+)', photoController.showAlbum);
router.get('/users/new', userController.new);
router.post('/users', userController.create);
router.get('/users/:userId(\\d+)/edit', sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.edit);
router.put('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.update);
router.delete('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminAndNotMyselfRequired, userController.destroy);

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/photos',sessionController.loginRequired, photoController.list);

router.get('/albums/:albumId(\\d+)/new',sessionController.loginRequired, photoController.new);

router.get('/photos/:photoId(\\d+)', photoController.show);
router.put('/photos/:photoId(\\d+)/like',sessionController.loginRequired, photoController.like);
router.post('/photos/:photoId(\\d+)/comment',sessionController.loginRequired, photoController.newComment);

router.post('/albums/:albumId(\\d+)/new', multer({inMemory: true}),sessionController.loginRequired, photoController.create);

router.delete('/photos/:photoId(\\d+)',sessionController.loginRequired, photoController.destroy);

router.get('/albums', sessionController.loginRequired, photoController.showAlbums);
router.get('/albums/:albumId(\\d+)', sessionController.loginRequired, photoController.showAlbum);
router.get('/albums/new', sessionController.loginRequired, photoController.newAlbum);
router.post('/albums/create', sessionController.loginRequired, photoController.createAlbum);
router.delete('/albums/:albumId(\\d+)',sessionController.loginRequired, photoController.deleteAlbum);

module.exports = router;