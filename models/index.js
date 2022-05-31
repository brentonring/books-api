require('dotenv').config();
const mongoose = require('mongoose');

const mongooseURI = process.env.MONGO_URI

mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo: ', mongooseURI)}
);

module.exports.Book = require('./book')