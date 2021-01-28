const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(router);


module.exports = app;