const { Router } = require('express');
const Dish = require('./model')
const router = new Router();
const bodyParser = require('body-parser');
const Type = require("../type-table/model");

// adds a menu dish
router.post('/dishes', function(req, res, next) {
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
      Type.findByPk(
        req.body.typeId,
        { include: [{ model: Dish }] },
        req.body.id
      ).then(type => {
        return res.status(201).send(type);
      });
    })
    .catch(err => next(err));
})

router.get("/dishes/:id", function(req, res, next) {
  const id = req.params.id;
  Dish.findByPk(id)
    .then(dish => {
      if (!dish) {
        return res.status(404).send({
          message: `Event does not exit`
        });
      }
      return res.send(dish);
    })
    .catch(err => next(err));
});

module.exports = router;
