const { Router } = require('express')
const Type = require('./model')
const router = new Router()

//update type
router.put('/types/:id', (req, res, next) => {
  Type
    .findByPk(req.params.id)
    .then(type => {
      if (!type) {
        return res.status(404).send({
          message: `Type does not exist`
        })
      }
      return type.update(req.body).then(type => res.send(type))
    })
    .catch(error => next(error))
})

//delele type
router.delete('/types/:id', (req, res, next) => {
  Type
    .findByPk(req.params.id)
    .then(type => {
      if (!type) {
        return res.status(404).send({
          message: `Type does not exist`
        })
      }
      return type.destroy()
        .then(() => res.send({
          message: `Type was deleted`
        }))
    })
    .catch(error => next(error))
})

// adds a type
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

//get all types
router.get("/types", function(req, res, next) {
  Type.findAll()
    .then(types => {
      res.json(types);
    })
    .catch(err => next(err));
});

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

