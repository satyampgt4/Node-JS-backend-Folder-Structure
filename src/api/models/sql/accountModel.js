
module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
        accoutnId:{
            type: Sequelize.DataTypes.STRING
        },
        balance:{
            type: Sequelize.DataTypes.INTEGER
        },

    })
    return Account;
}