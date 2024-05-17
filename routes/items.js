const express = require('express');
const router = express.Router();
const { validate, validateAddItem } = require('../validation'); // Import the validation middleware
const itemsController = require('../controllers/items');

const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', itemsController.getAll);

router.get('/:id', itemsController.getSingle);

router.post('/', isAuthenticated, validate, itemsController.createItem);

router.put('/:id', isAuthenticated, validate, itemsController.updateItem);

router.delete('/:id', isAuthenticated, itemsController.deleteItem);

module.exports = router;