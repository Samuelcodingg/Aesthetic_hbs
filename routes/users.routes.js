const { Router }  = require('express');
const { initApp } = require('../controllers/users.controller');

const router = Router();

router.get('/', initApp); 

module.exports = router;