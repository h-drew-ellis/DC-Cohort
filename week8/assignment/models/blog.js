'use strict';
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        category: DataTypes.STRING,
        is_published: DataTypes.BOOLEAN
    }, {});
    Blog.associate = function(models) {
        models.Blog.hasMany(models.Comment, { as: 'comments', foreignKey: 'post_id' })
    };
    return Blog;
};