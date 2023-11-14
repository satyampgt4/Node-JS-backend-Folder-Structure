
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        userName:{
            type: Sequelize.DataTypes.STRING
        },
        password:{
            type: Sequelize.DataTypes.STRING
        },
        firstName:{
            type: Sequelize.DataTypes.STRING
        },
        lastName:{
            type: Sequelize.DataTypes.STRING
        },
        dob:{
            type: Sequelize.DataTypes.DATE
        },
        email:{
            type: Sequelize.DataTypes.STRING
        },
        phone:{
            type: Sequelize.DataTypes.STRING
        },

    })
    return User;
}