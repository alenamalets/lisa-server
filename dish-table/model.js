const Sequelize = require('sequelize')
const sequelize = require('../db')
import Type from '../type-table/model'

const Dish = sequelize.define('dishes',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'dishes'
    })

Dish.belongsTo(Type)
module.exports = Dish