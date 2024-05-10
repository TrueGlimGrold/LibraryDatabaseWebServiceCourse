const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Users']
    const result = await mongodb.getDatabase().db().collection('items').find();
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    const itemId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('items').find({ _id: itemId });
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items[0]);
    });
};

const createItem = async (req, res) => {
    //#swagger.tags=['Users']
    const item = {
        type: req.body.type,
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        release_year: req.body.release_year,
        rating: req.body.rating
    };
    const response = await mongodb.getDatabase().db().collection('items').insertOne(item);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const updateItem = async (req, res) => {
    //#swagger.tags=['Users']
    const itemID = new ObjectId(req.params.id);
    const item = {
        type: req.body.type,
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        release_year: req.body.release_year,
        rating: req.body.rating
    };
    const response = await mongodb.getDatabase().db().collection('items').replaceOne({ _id: itemID }, item);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const deleteItem = async (req, res) => {
    //#swagger.tags=['Users']
    const itemID = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('items').deleteOne({ _id: itemID});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createItem,
    updateItem,
    deleteItem
}