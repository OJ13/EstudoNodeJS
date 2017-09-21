'use strinct'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        require: true,  //Obrigatório
        trim: true      //Remove os espaços,antes e depois
    },
    slug: {
        type: String,
        require: true,
        trim: true,
        index: true,    //vai ter que busca-lo
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true,
        default: true    //valor padrão
    },
    tags: [{              //Um array
        type: String,
        require: true
    }]
});

//Exemplt do produto
// {
//     "title": "teste",
//     "description": "xpto",
//     "tags" : [
//         "teste", "123", "X"
//     ]
// }

module.exports = mongoose.model('Product', schema);