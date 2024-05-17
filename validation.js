const { body, validationResult } = require('express-validator');

const validateAddItem = [
    body('type').notEmpty().isString(),
    body('title').notEmpty().isString(),
    body('director').notEmpty().isString(),
    body('genre').notEmpty().isString(),
    body('release_year').notEmpty().isInt(),
    body('rating').notEmpty().isFloat({ min: 0, max: 10 }),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateAddItem, validate };