const { DataTypes } = require('sequelize');

//Se define los modelos de temperamento con ID Y Nombre como pide el Readme
module.exports = (sequelize) => {

    sequelize.define('temperamento', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    })
}