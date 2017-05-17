//var express = require('express')();// com o retorno da função
//ou
var express = require('express');
var app = express();

//caso seja mandado uma rota que não existe o próprio express
//já tem uma certa tratativa
//precisamos informar para o express qual a rota
app.get('/', function(req, res) {
    // diretamente com o Node usavamos o end
    // , já aqui com expres usamos o send
    res.send("<html><body><h1>Portal News</h1></body></html>");
});
app.get('/tecnologia', function(req, res) {
    res.send("<html><body><h2>Tecnologia</h2></body></html>");
})

app.listen(3000, function() {
    console.log("Subindo Servidor na porta 3000 (com express)");
});