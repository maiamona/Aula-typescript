var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var contatos = [
	// {nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	// {nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	// {nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
  { id: 1, nome: "MENITO GARCIA", telefone: "99998888", data: new Date(), operadora:{nome:"UNITEL",codigo:14,categoria:"Celular",preco:2}},
  { id: 2, nome: "MONA GARCIA", telefone: "923744720", data: new Date(), operadora: {nome:"Movicel",codigo:15,categoria:"Celular",preco:3}},
  { id: 3, nome: "LUCY GARCIA", telefone: "33333344", data: new Date(), operadora: {nome:"Telecom",codigo:16,categoria:"Celular e Internet",preco:4}},
  { id: 4, nome: "MARIA DE FÁTIMA", telefone: "77777744", data: new Date(), operadora: {nome:"ZAP",codigo:17,categoria:"TV e FIBRA OPTICA",preco:5}},
  { id: 5, nome: "MARIA DA CONCEIÇÃO", telefone: "7779999", data: new Date(), operadora: {nome:"TVCABO",codigo:18,categoria:"TV e CABO",preco:6}}
];
var operadoras = [
	// {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	// {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	// {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	// {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	// {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
  // {nome: "UNITEL", codigo: 14, categoria: "Celular", preco: 2},
  { nome: "UNITEL", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Movicel", codigo: 15, categoria: "Celular", preco: 3 },
  { nome: "Telecom", codigo: 16, categoria: "Celular e Internet", preco: 4 },
  { nome: "ZAP", codigo: 17, categoria: "TV e FIBRA OPTICA", preco: 5 },
  { nome: "TVCABO", codigo: 18, categoria: "TV e CABO", preco: 6 },
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

// app.listen(process.env.PORT || 4001);