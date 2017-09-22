'use strinct'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,  //Obrigatório
        trim: true      //Remove os espaços,antes e depois
    },
    slug: {
        type: String,
        required: [ true, "Slug é obrigatório"],
        trim: true,
        index: true,    //vai ter que busca-lo
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true    //valor padrão
    },
    tags: [{              //Um array
        type: String,
        required: true
    }]
});

//Exemplo do produto
// {
//     "title": "teste",
//     "description": "xpto",
//      ...
//     "tags" : [
//         "teste", "123", "X"
//     ]
// }

module.exports = mongoose.model('Product', schema);