const { Router } = require('express')
const Menu = require('./model')
const router = new Router()

//delele menu item
router.delete('/menu/:id', (req, res, next) => {
    Menu
        .findByPk(req.params.id)
        .then(menu => {
            if (!menu) {
                return res.status(404).send({
                    message: `Menu does not exist`
                })
            }
            return menu.destroy()
                .then(() => res.send({
                    message: `Menu was deleted`
                }))
        })
        .catch(error => next(error))
})

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
