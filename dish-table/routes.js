const { Router } = require('express');
const Dish = require('./model')
const router = new Router();
const bodyParser = require('body-parser');

// adds a menu dish
router.post('/dishes', auth, function(req, res, next) {
  const dish = {
    name: req.body.name,
    typeId: req.body.typeId
  };
  Dish.create(dish)
    .then(dish => {
      if (!dish) {
        return res.status(404).send({
          message: `Something went wrong`
        });
      }
      
    })
})