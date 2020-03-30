'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserDeli = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    UserDeli.associate = function (models) {
        // associations can be defined here
    };
    return UserDeli;
};