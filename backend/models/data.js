const mongoose = require('mongoose');
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dataSchema = mongoose.Schema({

    date: {
        type: String,

        required: true,
        default: today.toLocaleDateString()
    },
    profit: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    drawdown: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Data', dataSchema);