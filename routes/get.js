const express = require('express');
const router = express.Router();
const Users = require('../model/Users')
const Company = require('../model/Company')
const Review = require('../model/Review')

router.get('/all-company', (req, res) => {
    Company.find({})
        .then((response) => {
            return res.send({ data: response, success: true })
        })
        .catch((e) => {
            return res.send({ success: false, message: e.message })
        })
})

module.exports = router