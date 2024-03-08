const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Categoria = require('./models/categoria')

//tamplete
app.engine('handlebars', handlebars.engine({defaulLayout: 'main'}))
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get('/categoria', function(req, res){
    res.render('categoria')
})

app.post('/add', function(req, res){
    Categoria.create({
        name: req.body.name
    }).then(function(){
        res.render("Categoria " + req.body.name+" Cadastrado com sucesso!")

    }).catch(function(erro){
        res.render("Erro ao cadastrar" + erro)

    })
})

//servidor
app.listen(9090, function(){
    console.log("Servidor rodado");
});