const { Router } = require("express");
const Menu = require("./model");
const router = new Router();
const bodyParser = require("body-parser");
const Type = require("../type-table/model");
const auth = require("../auth/middleware");
const Dish = require("../dish-table/model");

// find all menu items
router.get("/menu", function(req, res, next) {
  Menu.findAll({
    where: {
      date: req.params.date
    }
  })
    .then(menuItems => {
      res.json(menuItems);
    })
    .catch(err => next(err));
});

//create a single menu item
router.post("/menu", function(req, res, next) {
  Menu.create(req.body)
    .then(menuItem => {
      if (!menuItem) {
        return res.status(404).send({
          message: `Something went wrong`
        });
      }
      return res.status(201).send(menuItem);
    })
    .catch(err => next(err));
});

module.exports = router;
