const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.sync({alter: true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.sync({alter: true})

Postagem.create({
    titulo: "Titulo Qualquer",
    conteudo: "Conuteudo Qualquer"
})

Usuario.create({
    nome: "Vinicius",
    sobrenome: "Justino",
    idade: 22,
    email: "vinicius.teste@teste.com"
})
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar" + erro)
});
*/
