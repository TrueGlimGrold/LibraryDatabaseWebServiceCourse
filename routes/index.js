const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');});

router.use('/items', require('./items')); 

module.exports = router;

