const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

let uri = 'mongodb://OJ:teste@ds040017.mlab.com:40017/node_store';
//Conecta ao banco
mongoose.connect('mongodb://dev:masterkey@ds040017.mlab.com:40017/node_store', { useMongoClient: true });

//Carregar as Rotas
const indexRoutes = require('./routes/indexRoute');
const productsRoutes = require('./routes/productsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/product', productsRoutes);;

module.exports = app;