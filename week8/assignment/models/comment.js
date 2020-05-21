'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        is_published: DataTypes.BOOLEAN
    }, {});
    Comment.associate = function(models) {
        models.Comment.belongsTo(models.Blog, { as: 'blog', foreignKey: 'post_id' })
    };
    return Comment;
};