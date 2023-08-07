const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        date : {
            type: DataTypes.DATE,
            allowNull: false,
            },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                },
            },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id',
                },
            },
        },
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'comments',
        }
);

module.exports = Comments;