var models = require('../models');
var express = require("express");
var router = express.Router();


// get route -> index
router.get("/", function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  models.burger.findAll().then(function(data){
    var hbsObject = {burgers: data};
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res){
  models.burger.create({
    'burger_name': req.body.burger_name,
    finished: req.body.finished
  }).then(function(){
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function(req, res){
  models.burger.update(
  {
    finished: req.body.finished
  },
  {
    where: { id : req.params.id }
  }).then(function(result){
    res.redirect('/');
  })
});

module.exports = router;

