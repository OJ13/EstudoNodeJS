// utilizando a biblioteca http, com o uso do require
var http = require('http');

// vamos configurar(criar) um servidor que recebe uma função
// como parâmetro, que recebe uma requisição e no seu
// callback recebe uma resposta
var server = http.createServer(function(req, res) {
    //vamos enviar um página html
    res.end("<html><body><h1>Portal News</h1></body></html>")
});

//Aqui criamos a porta 3000
server.listen(3000);