const express = require('express');
const router = express.Router(); 

const itemsController = require('../controllers/items');

router.get('/', itemsController.getAll);

router.get('/:id', itemsController.getSingle);

module.exports = router;