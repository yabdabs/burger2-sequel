var express = require("express");
var router = express.Router();

var db = require("../models")

router.get('/', function(req, res) {
    // console.log('hello')
    db.burger.findAll({}).then(function(data) {
        res.render('index', { burgs: data })
        // res.redirect('/');
    })
});

router.post('/addBurger', function(req, res) {
    db.burger.create({
        burger_name: req.body.burgerInput
    }).then(function(data) {
        res.redirect("/");
    })
});

router.put('/:id', function(req, res) {
    db.burger.update({
        devoured: "true"
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect('/');
    })
});
module.exports = router;