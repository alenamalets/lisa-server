const Sequelize = require('sequelize')
const sequelize = require('../db')
const Dish = require('../dish-table/model')

const Menu = sequelize.define('menu',
    {
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'menu'
    })


    
Menu.belongsTo(Dish)
module.exports = Menu