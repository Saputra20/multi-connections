const express = require('express')
const router = express.Router()
const model = require('../models/index')

router.get('/', (req, res) => {
    model.User.findAll().then(users => {
        console.log(users);
        res.json({
            users
        });
    }).catch(err => console.log(err));
});

module.exports = router