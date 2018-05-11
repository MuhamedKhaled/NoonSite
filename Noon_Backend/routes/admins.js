var express = require('express');
var router = express.Router();
const adminController = require('../controllers/AdminController');

router.post('/', function(req, res, next) {
    adminController.addUser(req, res);
});

router.post('/login', function(req, res, next) {
    adminController.login(req, res);
});

router.post('/logout', function(req, res, next) {
    adminController.logout(req, res);
});

module.exports = router;
