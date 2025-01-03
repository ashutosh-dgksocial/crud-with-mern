const express = require('express');
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');

app.use(cors({ origin: `*` }));

const DB = "mongodb+srv://ashutosh:dgk492001@ashudigik-cluster.ugmuh.mongodb.net/";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected..')
})

app.listen(8000, (err) => {
    if (err) console.log('what the error', err.message)
    console.log('server running on port http://localhost:8000')
})