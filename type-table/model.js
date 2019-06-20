const Sequelize = require('sequelize')
const sequelize = require('../db')

const Type = sequelize.define('types',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'types'
    })

module.exports = Type