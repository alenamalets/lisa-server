const Sequelize = require('sequelize')
const sequelize = require('../db')
import Dish from '../dish-table/model'

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