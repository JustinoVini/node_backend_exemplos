const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');


// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars')
        // Body Parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // Conexão com o banco de dados
        const sequelize = new Sequelize('tests', 'root', '@Viking569038', {
            host: "localhost",
            dialect: "mysql"
        });

    // Criando uma rota get
    app.get("/cad", function(req, res) {
        // Fazer com que o express exiba o formulario
        // Precisamos chamar o res e o um render passando o nome do arquivo
        res.render('formulario');
    })

    app.post("/add", function(req, res) {
        // Como pegar um dado que ta vindo do forms ?
        res.send("Texto:" + req.body.titulo+ " Conteudo: "+req.body.conteudo)
    });


    

app.listen(3000, function() {
    console.log("Server running")
});