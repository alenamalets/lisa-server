const { Router } = require('express');
const Dish = require('./model')
const router = new Router();
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


//update dish
router.put('/dishes/:id', (req, res, next) => {
  Dish
    .findByPk(req.params.id)
    .then(dish => {
      if (!dish) {
        return res.status(404).send({
          message: `Dish does not exist`
        })
      }
      return dish.update(req.body).then(dish => res.send(dish))
    })
    .catch(error => next(error))
})

//delele dish
router.delete('/dishes/:id', (req, res, next) => {
  Dish
    .findByPk(req.params.id)
    .then(dish => {
      if (!dish) {
        return res.status(404).send({
          message: `Dish does not exist`
        })
      }
      return dish.destroy()
        .then(() => res.send({
          message: `Dish was deleted`
        }))
    })
    .catch(error => next(error))
})

// get a menu dish by id
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

// get a menu dish by type
router.get("/dishes", function(req, res, next) {
  Dish.findAll({
    where: {
      type: req.params.typeId
    }
  })
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => next(err));
});


module.exports = router;
