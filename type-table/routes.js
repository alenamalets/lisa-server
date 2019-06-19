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

module.exports = router;