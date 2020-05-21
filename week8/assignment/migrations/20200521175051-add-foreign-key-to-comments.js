'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Comments',
            'post_id', {
                type: Sequelize.INTEGER,
                references: { model: 'Blogs', key: 'id' }
            })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Comments',
            'post_id'
        )
    },
};