const express = require ('express');
const mysql = require('mysql');
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('./models/msgModel')

const Comentario = mongoose.model('comentarios')
require('../DB/db_conn')
//

//middleware uma configuracao no servidor HTTP com Node.JS
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors ())
app.use(bodyParser.json());

//definindo conexao com o banco de dados MYSQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projetodbrecodeprosonia"
})

//Criar uma interface para retorno do dados de BD em formato JSON
//considerando dois métodos para tabela avisos (get e post)

app.get ("/produtos", (req, res)=> {

    const query = "SELECT * FROM produtos";
    connection.query(query, (error, result) =>{
        if (error){
            res.send(error)
        } else {
            res.json(result)
        }

    })
});

app.post("/mensagem", (req, res)=> {
    const {nome, mensagem} = req.body;

    connection.query(`INSERT INTO mensagens(nome, mensagem) values
    ('${nome}', '${mensagem}')`, (error, result) =>{
    
            if (error) {
                res.send(error)
            } else {
                res.status(201).send ("Mensagem Cadastrada")
            }
        
    })


})

module.exports = function (app) {

    app.get('/recebe_mensagem', async (req, res) => {
      const comentariosResponse = await Comentario.find()
      return res.json(comentariosResponse);
     
    });
  
    app.post('/envia_mensagem', (req, res) => {
     
      const novoComentario = new Comentario({
        nome: req.body.nome,
        mensagem: req.body.mensagem,
      })
  
      novoComentario.save();
      res.json({
        message: "Mensagem enviada",
        info: novoComentario
      })
    });
  
  }


app.listen(8000);

//localhost:8000/produtos
//localhost:8000/mensagem

//Sonia Ferreira Borges, projeto feito e customizado para atender requisitos de entrega
//de acordo com monitoria do Guilherme 21/1
// exercicio não considerando aplicações mais complexas como divisões em várias tabelas
// o que iria requisitar a divisao do arquivo index.js em vários modulos.

//nodemon atualiza automaticamente  o estado da aplicação, identifica que a mudança foi
//definida e faz o restart do servidor
//ambiente desenvolvimento não app para produção
//ambiente Producao
