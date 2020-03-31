const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/users', function (req, res) {
    User.find({}, (err, users) => {
        res.json(users);
    })
});

router.post('/users/:id', function (req, res) {
    console.log(req.body);
    delete req.body._id;
    User.create(req.body, (err, user) => {
        res.json(err ? err : user);
    })
});

router.put('/users/:id', function (req, res) {
    console.log(req.body);
    delete req.body.id;
    User.update({_id: req.params.id}, req.body, (err, user) => {
        res.json(err ? err : user);
    });
});

router.delete('/users/:id', function (req, res) {
    console.log(req.body);
    delete req.body.id;
    User.deleteOne({_id: req.params.id}, (err, user) => {
        res.json(err ? err : user);
    });
});

module.exports = router;
