const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('items').find();
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items);
    });
};

const getSingle = async (req, res) => {
    const itemId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('items').find({ _id: itemId });
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items[0]);
    });
};

module.exports = {
    getAll,
    getSingle 
}