var http = require('http');

var server = http.createServer(function(req, res) {

    var categoria = req.url;
    //a partir do parametro da url, chamamos um arquivo diferente
    if (categoria == "/tecnologia") {
        res.end("<html><body><h2>Tecnologia</h2></body></html>");
    } else if (categoria == "/moda") {
        res.end("<html><body><h2>Moda</h2></body></html>");
    } else if (categoria == "/beleza") {
        res.end("<html><body><h1>Beleza</h1></body></html>");
    } else {
        res.end("<html><body><h1>Portal News</h1></body></html>")
    }
});


server.listen(3000);