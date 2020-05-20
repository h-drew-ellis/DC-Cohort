'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Blogs', 'isPublished',
            Sequelize.BOOLEAN
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Blogs', 'isPublished')
    }
};