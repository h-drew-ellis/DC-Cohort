'use strict';
module.exports = (sequelize, DataTypes) => {
    const dish = sequelize.define('dish', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {});
    dish.associate = function(models) {
        // associations can be defined here
    };
    return dish;
};