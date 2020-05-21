'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Comments',
            'category'
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Comments',
            'category',
            Sequelize.STRING
        )
    }
};