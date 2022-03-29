require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to Database"))

app.use(express.json());
const dataRoutes = require('./routes/data')

app.use('/data', dataRoutes)

const PORT = 8081;


app.listen(
    PORT, () => console.log("server started ")
);
