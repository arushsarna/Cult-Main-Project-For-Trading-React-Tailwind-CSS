const express = require('express');
const router = express.Router();
const Data = require('../models/data')
// get all

router.get('/all', async (req, res) => {
    try {
        const data = await Data.find({ capital: 103000 })

        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message })

    }
})

// get 1 data
router.get('/:id', (req, res) => {

})
// 1 month data
router.get('/month', (req, res) => {

})
// weekly data
router.get('/week', (req, res) => {

})
// delete 1 
router.delete('/:id', (req, res) => {

})
// update data
router.patch('/', (req, res) => {

})
// create data 
router.post('/', async (req, res) => {
    const data = new Data({

        capital: req.body.capital,
        drawdown: req.body.drawdown,
        profit: req.body.profit
    })
    try {
        const newData = await data.save();
        res.status(201).json(newData);
    }
    catch (err) {
        res.status(400).json({ message: err.message });

    }

})
module.exports = router