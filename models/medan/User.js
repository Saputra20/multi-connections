'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserMedan = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    UserMedan.associate = function (models) {
        // associations can be defined here
    };
    return UserMedan;
};