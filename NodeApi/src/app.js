const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//Carregar as Rotas
const indexRoutes = require('./routes/indexRoute');
const productsRoutes = require('./routes/productsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/product', productsRoutes);;

module.exports = app;