// src/Config/dbConfig.js
const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://josedevroberto:josedevroberto@cluster0.xvb1bvn.mongodb.net/meubanco?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbConfig)

module.exports = connectDB;
