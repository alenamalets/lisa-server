const { Router } = require('express');
const router = new Router();
const Type = require("../type-table/model");

// adds a menu dish
router.post('/types', function(req, res, next) {
  const type = {
    name: req.body.name,
  };
  Type.create(type)
    .then(type => {
      if (!type) {
        return res.status(404).send({
          message: `Something went wrong`
        });
      }
    })
    .catch(err => next(err));
})

//gets a type by id
router.get("/types/:id", function(req, res, next) {
  const id = req.params.id;
  Type.findByPk(id)
    .then(type => {
      if (!type) {
        return res.status(404).send({
          message: `Event does not exit`
        });
      }
      return res.send(type);
    })
    .catch(err => next(err));
});

module.exports = router;
