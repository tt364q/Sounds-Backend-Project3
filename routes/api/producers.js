const express = require('express');
const router = express.Router();
const producersCtrl = require('../controllers/producers');

//define our routes

// router.get('/', producersCtrl.index);
router.post('/create', producersCtrl.create);
router.post('/:id/update', producersCtrl.update);
router.post('/:id/delete', producersCtrl.remove);


//exprot the router object)
module.exports = router;