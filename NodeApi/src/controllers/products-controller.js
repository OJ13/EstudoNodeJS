'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({
            active: true  //só ativos
        },'title price slug') //trazer esses 3 propriedades
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e =>{
            res.status(400).send({
                message: 'Falha na busca dos Produtos!',
                data: e
            });
        });
    //buscar com algum filtro
    //Product.find({ title: 'xpto'})
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    //OU
    // var product = new Product();
    // product.title = req.body.title;
    // product.description = req.description;
    product.save()        //salvar 
    .then( x => {
        res.status(201)     //se der certo
            .send({ 
                message: 'Produto cadastrado com Sucesso!'
            });
    }).catch(e => {
        res.status(400)     //se der erro
            .send({ 
                message: 'Falha ao cadastrar produto', data: e 
            });            
    });
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};