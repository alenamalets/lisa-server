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

module.exports = router;