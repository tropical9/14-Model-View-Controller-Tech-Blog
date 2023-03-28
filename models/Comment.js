const { Model, DataTypes } = require ('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//create User model
class Comment extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentcontent: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return new UserData;
        //     }
            // beforeUpdate: async (updatedUserData) => {
            //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            //     return updatedUserData;
            // }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;