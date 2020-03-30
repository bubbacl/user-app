const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

mongoose.connect('mongodb://localhost/userdb', {
    promiseLibrary: global.Promise
});

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/', apiRouter);

// Static files
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public/dist')));

app.listen(3000, () => {
    console.log('server on port 3000');
})
