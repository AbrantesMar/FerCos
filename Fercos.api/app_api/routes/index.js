var express = require('express');
var router = express.Router();

var userApiController = require('../controllers/userApiController');

router.get('/users', userApiController.userListByDistance);
router.post('/users', userApiController.userCreate);
router.get('/users/:id', userApiController.findById);
router.put('/users/:id', userApiController.atualizarUser);
router.delete('/users/:id', userApiController.deletarUser);

module.exports = router;