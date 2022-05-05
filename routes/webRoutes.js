const express = require('express');
const router = express.Router();

const shanty = require('../controllers/webController');

router.get('/', shanty.home);
router.get('/menu', shanty.menu);
router.get('/contact', shanty.contact);
router.get('/aboutus', shanty.aboutUs);
router.get('/login', shanty.login);

module.exports = router;