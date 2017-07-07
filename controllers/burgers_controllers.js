var express= require("express");
var router= express.Router();

var burger= require("../models/burger.js")

router.get('/', function(req, res){
	burger.selectAll(function(data){
		res.render('index', {burgs: data});
	});
});

router.post('/addBurger', function(req, res){
	burger.insertBurger("burger_name", req.body.burgerInput, function(){
		console.log(req.body.burgerInput);	
		res.redirect('/');
	});
});

router.put('/:id', function(req, res){
	console.log("router.put");
	console.log(req.params.id);
	burger.updateBurger("devoured", "id", req.params.id, function(){

		res.redirect('/');

	});
});
module.exports= router; 